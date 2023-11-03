import React from 'react'
import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const JobBox = ({singleJob}) => {
    const {id, companyName, jobLocation, educationalRequirements, companyLogo, jobTitle, jobType, jobTime, salary} = singleJob;
  return (
    <div className='p-10 border flex gap-6 rounded-md mb-3 items-center bg-slate-100'>
        <div style={{width:"6rem"}} className="">
            <img src={companyLogo} alt="" />
        </div>
      <div className="">
      <h2 className='text-xl font-bold'>{jobTitle}</h2>
      <h2 className='pb-4'>{companyName}</h2>
        <div className="flex gap-3 pb-3">
            <span className='px-2 border text-x bg-slate-300'>{jobType}</span>
            <span className='px-2 border text-x bg-slate-300'>{jobTime}</span>
        </div>
        <span className='flex gap-3 items-center'><FaMapMarkerAlt className="text-blue-400"></FaMapMarkerAlt>Location:{jobLocation}</span>
        <span className='flex gap-3 items-center'><FaMoneyBillAlt className="text-green-500"></FaMoneyBillAlt>Salary:{salary}</span>
      </div>
      <Link to={`/job/${id}`} className='font-bold bg-blue-500 text-white border ml-auto  py-1 px-2 rounded-md'>View Details</Link>
      
    </div>
  )
}

export default JobBox
