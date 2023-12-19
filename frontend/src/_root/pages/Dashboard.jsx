
import Heading from "../../components/shared/Heading"
import SubjectCard from "../../components/shared/SubjectCard"
import { validSubjects } from "../../constants"

import DoubtCard from "../../components/shared/DoubtCard";
import { useCreateMyDoubtsPost } from "../../lib/react-query/queriesAndMutations";

import Loader from "@/components/shared/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../config";


const Dashboard = () => {

  // const {
  //   data: posts,
  //   isPending: isPostLoading,
  //   error
  // } = useCreateMyDoubtsPost();

  const [posts, setPosts] = useState([]);


  const getRecentDoubtsPosts = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/doubtRequest/get-all-doubts`);
      console.log(response.data.data);
      setPosts(response.data.data)
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };

  useEffect(() => {
    getRecentDoubtsPosts()
  }, []);



  console.log("Posts:", posts);
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


        <Heading title={"Doubts"} />

        {/* {error ? (
          <div>Error fetching data: {error}</div>
        ) : isPostLoading ? (
          <Loader />
        ) : !posts ? (
          <div>No doubts available</div>
        ) : (
          <ul className="flex flex-col flex-1 gap-9 w-full">
            {posts.map((post) => (
              <DoubtCard post={post} key={post._id} />
            ))}
          </ul>
        )} */}


        {
          posts && (
            <ul className="flex flex-row gap-4 w-full">
              {posts.map((post) => (
                <DoubtCard post={post} key={post._id} />
              ))}
            </ul>
          )
        }




      </div>


    </section>
  )
}

export default Dashboard