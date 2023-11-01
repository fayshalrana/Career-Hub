import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faVoicemail, faPhone, faBagShopping, faDollar } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom'
import { addToDb } from '../../fakedb';

const JobDetails = () => {
  const job = useLoaderData();

  const handelAddToCart = (job) => {
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
          <div className='mb-5'>
            <img src={job.companyLogo} alt="" />
          </div>
          <p><span className='font-bold'>Job Description:</span> {job.description}</p>
          <p className='pt-5'><span className='font-bold'>Job Responsiblity:</span>{
            job.responsibilities.map(respon => <li className='py-2'>{respon}</li>)
          }</p>
          <p className='pt-5'><span className='font-bold'>Educational Requirements:</span> {job.education}</p>
          <p className='pt-5'><span className='font-bold'>Experiences:</span> {job.experience}</p>
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
              <p> <span className='font-bold'>Job Title:</span> {job.title}</p>
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
        <button onClick={() =>handelAddToCart(job.id)} className='border rounded-md bg-blue-500 mt-4 text-center p-2 w-full'>Apply Now</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default JobDetails
