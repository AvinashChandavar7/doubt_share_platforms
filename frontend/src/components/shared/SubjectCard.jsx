
import {
  Card,
  CardDescription,
  CardHeader,

} from "../ui/card"

// eslint-disable-next-line react/prop-types
const SubjectCard = ({ label, imgURL }) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center justify-between">
        <img src={imgURL} alt="icons" />
        <CardDescription className="font-medium text-center ">
          {label}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default SubjectCard;