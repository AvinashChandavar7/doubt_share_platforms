
import Heading from "../../components/shared/Heading"
import SubjectCard from "../../components/shared/SubjectCard"
import { validSubjects } from "../../constants"

import DoubtCard from "../../components/shared/DoubtCard";
import { useCreateMyDoubtsPost } from "../../lib/react-query/queriesAndMutations";

import Loader from "@/components/shared/Loader";


const Dashboard = () => {

  const {
    data: posts,
    isPending: isPostLoading
  } = useCreateMyDoubtsPost();


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

        {
          isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {
                posts?.map((post) => (
                  <DoubtCard post={post} key={post.caption} />
                ))
              }
            </ul>
          )
        }


      </div>


    </section>
  )
}

export default Dashboard