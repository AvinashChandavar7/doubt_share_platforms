/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Label } from "../ui/label"

const DoubtCard = ({ doubt }) => {



  const { subject, language, status, _id } = doubt
  return (
    <Card>
      <Link to={`/doubt-details/${_id}`}>
        <CardHeader className="flex flex-col items-start justify-between">
          <div className="w-full h-52 mb-4 rounded-md">
            <img src={`/assets/images/${subject}.jpg`} alt="icons" className="w-full h-52  object-fill" />
          </div>


          <CardTitle>Subjects : {subject || "English"}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Label className="">Status : &nbsp;
            <span className={` px-4 py-1 rounded-md
            ${status === "Accepted" && 'bg-green-700'}  
           ${status === "Pending" && 'bg-yellow-700'}  
           ${status === "Rejected" && 'bg-rose-700'} `}>
              {status || "Resolved"}
            </span>
          </Label>
          <div className={`h-5 rounded-md p-2 flex justify-end items-center
           ${status === "Accepted" && 'bg-green-700'}  
           ${status === "Pending" && 'bg-yellow-700'}  
           ${status === "Rejected" && 'bg-rose-700'} 
          `}>
            100%
          </div>
        </CardContent>
        <CardFooter>
          <CardDescription className="uppercase">
            Language&nbsp;:&nbsp;{language || "English"}
          </CardDescription>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default DoubtCard





