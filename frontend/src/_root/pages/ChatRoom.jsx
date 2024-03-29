import Heading from "../../components/shared/Heading"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

const ChatRoom = () => {
  return (
    <section className="flex flex-1 ">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/chat.svg" alt="add-post" width={36} height={36} />
          <Heading title={"Chat Room"} />
        </div>


        <div className="w-full h-full  flex flex-row">
          <div className="border w-[30%] rounded-md">

          </div>
          <div className="border w-[70%] rounded-md">

            <div className="w-full h-full flex flex-row gap-2 items-end p-5">

              <Input type="text" className="shad-input" placeholder="Enter the Username" />
              <Button type="submit" className="py-6 px-10 shad-button_primary">
                go
              </Button>
            </div>
          </div>
        </div>



      </div>

    </section>
  )
}

export default ChatRoom