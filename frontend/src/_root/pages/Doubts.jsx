import DoubtCard from "../../components/shared/DoubtCard"
import Heading from "../../components/shared/Heading"

import Loader from "@/components/shared/Loader";
import { useGetRecentDoubtsPosts } from "../../lib/react-query/queriesAndMutations";

const Doubts = () => {

  const {
    data: myDoubts,
    isPending: isDoubtsLoading,
    error: isDoubtsError
  } = useGetRecentDoubtsPosts();


  return (
    <section className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/bookmark.svg" alt="add-post" width={36} height={36} />
          <Heading title={"My Doubts"} />

        </div>

        {isDoubtsError ? (
          <div>Error fetching data: {isDoubtsError.message}</div>
        ) : isDoubtsLoading ? (
          <Loader />
        ) : !myDoubts ? (
          <div>No doubts available</div>
        ) : (
          <ul className="grid grid-cols-3 gap-4 w-full">
            {myDoubts.map((doubt) => (
              <DoubtCard doubt={doubt} key={doubt._id} />
            ))}
          </ul>
        )}


      </div>
    </section>
  )
}

export default Doubts