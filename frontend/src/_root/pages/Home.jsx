
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Home = () => {

  return (
    <section className="flex m-10  bg-gradient-to-r from-violet-900 to-blue-900  border">

      <div className='flex flex-1 justify-center items-center flex-col py-10'>

        <div className="flex flex-col w-full h-full justify-between">
          <div>
            <h1 className="h1-bold md:h2-bold my-10 px-10 flex ">
              DoubtsCleared
            </h1>
            <h1 className="h1-semibold md:h1-semibold my-10 px-10 flex ">
              Unlock Your Learning Potential with Real-Time Answers and Expert Tutors!
            </h1>
          </div>

          <div className="mx-10">
            <p>
              Discover Your

              Find answers to your doubts in real-time, connect with experienced tutors, and unlock your learning potential.
            </p>
          </div>

          <div className="flex items-end justify-end mr-10">

            <Link to='/sign-in' className="text-primary-500 text-small-semibold p-5 ">
              <Button type="submit" className="shad-button_primary">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex h-full w-1/2 border-l ">
        <img
          src='/assets/images/landingPage.png'
          alt='side-img'
          className=' object-fill bg-no-repeat'
        />
      </div>
    </section >


  )
}

export default Home;