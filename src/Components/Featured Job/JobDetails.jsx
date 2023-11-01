import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faVoicemail, faPhone, faBagShopping, faDollar } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom'
import { addToDb } from '../../fakedb';

const JobDetails = () => {
  const job = useLoaderData();
  const handelAddToCart = (id) => {
    console.log(id)
  };



  return (
    <>
      {/* banner  */}
      <div className='flex h-48 bg-green-400 justify-center items-center'>
        <h1 className='text-4xl font-bold'>Job Details </h1>
      </div>

      {/* job details  */}
      <div className='m-12 grid grid-flow-row-dense grid-cols-3'>
        <div className='col-span-2'>
         <div className="flex items-center gap-4  pb-10">
        <div style={{width:'4rem', height:'4rem'}} className="rounded-full overflow-hidden border border-green-700">
            <img src={job.companyLogo} alt="" />
        </div>
         <h2 className='text-4xl font-bold'>{job.companyName}</h2>
         </div>
          <p><span className='font-bold'>Job Description: <br /></span> {job.jobDescription}</p>
          <p className='pt-5'><span className='font-bold'>Job Responsiblity: <br /> </span>{
            job.jobResponsibility
          }</p>
          <p className='pt-5'><span className='font-bold'>Educational Requirements: <br /></span> {job.educationalRequirements}</p>
          <p className='pt-5'><span className='font-bold'>Experiences:</span> {job.experiences}</p>
        </div>
        <div>
          <div className='bg-blue-200 p-5 rounded-md'>
            <h2 className='text-1xl font-bold border-b-2 pb-3 border-blue-300'>Job Details</h2>
            <div className='pt-3 flex gap-2 items-center'>
              <FontAwesomeIcon className='mr-1 text-blue-600' icon={faDollar} />
              <p><span className='font-bold'>Salary:</span> {job.salary} (per month)</p>
            </div>
            <div className='pt-3 flex gap-2 items-center'>
              <FontAwesomeIcon className='mr-1 text-blue-600' icon={faBagShopping} />
              <p> <span className='font-bold'>Job Title:</span> {job.jobTitle}</p>
            </div>
            <div className='pt-5'>
              <h3 className='text-1xl font-bold border-b-2 pb-3 border-blue-300'>Contact Information</h3>
              <div className='pt-3 flex  gap-2 items-center'>
                <FontAwesomeIcon className='mr-1 text-blue-600' icon={faPhone} />
                <p><span className='font-bold'>Phone:</span> {job.phoneNumber}</p>
              </div>
              <div className='pt-3 flex  gap-2 items-center'>
                <FontAwesomeIcon className='mr-1 text-blue-600' icon={faVoicemail} />
                <p><span className='font-bold'>Email:</span> {job.email}</p>
              </div>
              <div className='pt-3 flex gap-2 items-center'>
                <FontAwesomeIcon className='mr-1 text-blue-600' icon={faLocationPin} />
                <p><span className='font-bold'>Address:</span> {job.address}</p>
              </div>
            </div>
            <div>

            </div>
          </div>
          <div className='text-center'>
            <button onClick={() => handelAddToCart(job.id)} className='border rounded-md bg-blue-500 mt-4 text-center p-2 w-full'>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetails
