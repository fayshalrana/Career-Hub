import React, { useState } from 'react'
import { getjobCart } from '../../fakedb';
import { useLoaderData } from 'react-router-dom';
import JobBox from './jobBox';


const AppliedJobs = () => {
    const totalJobs = useLoaderData();

    const storedJobs = getjobCart();
    let saveJob = [];

    const [allJobs, setAllJobs] = useState(saveJob)
    
    for(const id in storedJobs){
        const findAddedJob = totalJobs.find(job => job.id == id)
            saveJob.push(findAddedJob)
    }


  return (
    <div>
    <div className="text-center py-10 bg-slate-400 mb-5">
    <h2 className='text-4xl font-bold'> Applided jobs</h2>
    </div>
        <div style={{maxWidth:'50rem'}} className='mx-auto'>
            {
                allJobs.map(job => <JobBox key={job.id} singleJob={job}></JobBox>)
            }
        </div>

    </div>
  )
}

export default AppliedJobs
