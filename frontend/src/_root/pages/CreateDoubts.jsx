import PostMyDoubts from "../../components/froms/PostMyDoubts"
import Heading from "../../components/shared/Heading"

const CreateDoubts = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/public/assets/icons/add-post.svg" alt="add-post" width={36} height={36} />
          <Heading title={"Add Doubts Details"} />

        </div>

        <PostMyDoubts action="Create" />
      </div>
    </div>
  )
}

export default CreateDoubts