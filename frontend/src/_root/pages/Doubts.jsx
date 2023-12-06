import DoubtCard from "../../components/shared/DoubtCard"
import Heading from "../../components/shared/Heading"

const Doubts = () => {
  return (
    <section className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/bookmark.svg" alt="add-post" width={36} height={36} />
          <Heading title={"My Doubts"} />

        </div>
        <DoubtCard />
      </div>
    </section>
  )
}

export default Doubts