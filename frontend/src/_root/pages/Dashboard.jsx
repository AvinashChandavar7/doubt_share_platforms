import Loader from "@/components/shared/Loader";
import Heading from "../../components/shared/Heading"
import SubjectCard from "../../components/shared/SubjectCard"
import DoubtCard from "../../components/shared/DoubtCard";

import { useGetRecentDoubtsPosts } from "../../lib/react-query/queriesAndMutations";

import { validSubjects } from "../../constants"

const Dashboard = () => {

  const {
    data: doubts,
    isPending: isDoubtsLoading,
    error: isDoubtsError
  } = useGetRecentDoubtsPosts();

  // console.log("Posts:", posts);
  // console.log("Error:", error);

  return (
    <section className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/home.svg" alt="add-post" width={36} height={36} />
          <Heading title={"Subjects"} />
        </div>

        <div className="card-grid">
          {validSubjects.map(subject => (
            <SubjectCard key={subject.id} value={subject.value} label={subject.label} imgURL={subject.imgURL} />
          ))}
        </div>

        {/* <div className="bg-black  max-w-5xl  overflow-hidden">
          <div className="m-5 flex flex-row gap-4 overflow-x-scroll  ">
            {validSubjects.map(subject => (
              <SubjectCard key={subject.id} value={subject.value} label={subject.label} imgURL={subject.imgURL} />
            ))}
          </div>
        </div> */}


        <Heading title={"Doubts"} />

        {isDoubtsError ? (
          <div>Error fetching data: {isDoubtsError.message}</div>
        ) : isDoubtsLoading ? (
          <Loader />
        ) : !doubts ? (
          <div>No doubts available</div>
        ) : (
          <ul className="card-doubt-grid">
            {doubts.map((doubt) => (
              <DoubtCard doubt={doubt} key={doubt._id} />
            ))}
          </ul>
        )}

      </div>


    </section>
  )
}

export default Dashboard