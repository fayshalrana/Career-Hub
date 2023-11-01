import React, { useEffect, useState } from 'react'
import Job from './Job';
import { useNavigate } from 'react-router-dom';

const FeaturedJob = () => {
    const [jobs, setJob] = useState([]);
    const [visible, setVisible] = useState(4)
    const navigete = useNavigate();
    const [jobView, setJobView] = useState(jobs);
   
    useEffect(()=>{
        fetch("http://localhost:3000/jobs")
        .then(res => res.json())
        .then(data => setJob(data));
    },[])
    const handleClick =(id) =>  {
      navigete(`/job/${id}`);
      const getView = jobView.find(jv => jv.id == id)
      setJobView(getView);
      }
      const loadMore = () =>{
        setVisible(visible + 2)
      }
      const hide = () =>{
        setVisible(visible - 2)
      }

  return (
    <div className='py-10 mx-12 '>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Featured Jobs</h2>
        <p className='py-5 text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='mt-10 grid grid-cols-2 gap-3'>
        {
            jobs.slice(0, visible).map(job => <Job handleClick={handleClick} key={job.id} job={job}>
            </Job>)
         
        }
      </div>
      <div className="text-center mt-5">
      {
              visible < jobs.length && (
                <button className='rounded-md  py-1 px-3  bg-blue-500 text-white' onClick={loadMore}>See All Jobs</button>
              ) || <button className='rounded-md  py-1 px-3  bg-blue-500 text-white'  onClick={hide}>Hide jobs</button>
            }
      </div>
    </div>
  )
}

export default FeaturedJob
