import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Job = ({ job, handleClick }) => {
  const { jobTitle, companyLogo, companyName, jobTime, company, id, jobType, jobLocation, employmentType, city, country, salary } = job;
 
  return (
    <div className='p-5 border bg-gray-200 rounded-md'>
      <div className='flex gap-5 items-center'>
       <div style={{width:"4rem", height:"4rem"}} className="rounded-full overflow-hidden">
       <img src={companyLogo} alt="" />
       </div>
        <h2 className='text-2xl font-bold'>{jobTitle}</h2>
      </div>
          <h1 className='font-bold py-2'>{companyName}</h1>
          <p>{company}</p>
          <ul className='flex gap-1 mt-3'>
            <li className='py-1 px-2 font-bold border-sky-600 border text-blue-600'>{jobType}</li>
            <li className='py-1 px-2 font-bold border-sky-600 border text-blue-600'>{jobTime}</li>
          </ul>
          <div className='flex gap-3 my-3'>
            <p>
            <FontAwesomeIcon className='mr-1' icon={faLocationPin} />
              {jobLocation}
            </p>
            <p>
            <FontAwesomeIcon className='mr-1' icon={faDollarSign} />
            Salary: {salary}
            </p>
          </div>
          {/* <Link to={`/job/${id}`}> show details</Link> */}
          <button onClick={()=> handleClick(id)} className='py-1 px-2 bg-blue-500 rounded-md text-white'>View Details</button>
    </div>
  )
}

export default Job
