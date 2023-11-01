import React from 'react';
import './Banner.css'

const Bnner = () => {
  return (
    <div className='vh-100 mx-12 grid grid-cols-2 gap-3'>
      <div className='h-full flex flex-col justify-center items-start'>
        <h1 className='text text-7xl font-bold'>One Step Closer To Your <br /> <span className='text-blue-500'> Dream Job</span></h1>
        <p className='text-gray-500 py-4 text-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className='border py-2 px-4 bg-blue-400 rounded-md text-white'>Get Started</button>
      </div>
      <div className='banner_img'>
        <img className='w-full' src="/images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  )
}

export default Bnner
