
import { useParams } from 'react-router-dom';

const DoubtDetails = () => {

  const studentId = useParams();

  console.log(studentId)

  return (
    <div className='flex items-center justify-center w-full'>
      <h2 className='text-2xl'>Doubts Details Page</h2>
    </div>
  )
}

export default DoubtDetails