
import Heading from "../../components/shared/Heading"
import SubjectCard from "../../components/shared/SubjectCard"
import { validSubjects } from "../../constants"

const Dashboard = () => {
  return (
    <section className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/public/assets/icons/home.svg" alt="add-post" width={36} height={36} />
          <Heading title={"Subjects"} />
        </div>


        <div className="card-grid">
          {validSubjects.map(subject => (
            <SubjectCard key={subject.id} value={subject.value} label={subject.label} imgURL={subject.imgURL} />
          ))}
        </div>




      </div>


    </section>
  )
}

export default Dashboard