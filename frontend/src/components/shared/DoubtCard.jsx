/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  Label
} from "../ui/label"

const DoubtCard = ({ doubt }) => {
  const { subject, language, status } = doubt
  return (
    <Card>
      <CardHeader className="flex flex-col items-start justify-between">
        <img src='/assets/icons/english.jpg' alt="icons" className="w-50 h-50" />

        <CardTitle>Subjects : {subject || "English"}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Label className="text-primary-800">Status : {status || "Resolved"}</Label>
        <div className="h-5 border bg-primary-800  flex justify-end items-center"> 100%</div>
      </CardContent>
      <CardFooter>
        <CardDescription className="uppercase">
          Language : {language || "English"}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default DoubtCard