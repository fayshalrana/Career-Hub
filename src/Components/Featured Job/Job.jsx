import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Job = ({ job, handleClick }) => {
  const { title,companyLogo, company, id, jobType, location, employmentType, city, country, salary } = job;
 
  return (
    <div className='p-5 border bg-gray-200 rounded-md'>
      <div>
        <img src={companyLogo} alt="" />
      </div>
          <h1 className='font-bold py-2'>{title}</h1>
          <p>{company}</p>
          <ul className='flex gap-1 mt-3'>
            <li className='py-1 px-2 border-sky-600 border-2 text-blue-600'>{jobType}</li>
            <li className='py-1 px-2 border-sky-600 border-2 text-blue-600'>{jobType}</li>
          </ul>
          <div className='flex gap-3 my-3'>
            <p>
            <FontAwesomeIcon className='mr-1' icon={faLocationPin} />
              {city}, {country}
            </p>
            <p>
            <FontAwesomeIcon className='mr-1' icon={faDollarSign} />
            Salary: {salary}
            </p>
          </div>
          <Link to={`/job/${id}`}> show details</Link>
          <button onClick={()=> handleClick(id)} className='py-1 px-2 bg-blue-500 rounded-md text-white'>View Details</button>
    </div>
  )
}

export default Job
