import React from 'react'
import Bnner from './Bnner'
import JobCatagory from './JobCatagory'
import { useLoaderData } from 'react-router-dom'
import FeaturedJob from '../Featured Job/FeaturedJob'


const Home = () => {
   
  return (
    <>
    <Bnner></Bnner>
    <JobCatagory></JobCatagory>
    <FeaturedJob></FeaturedJob>
    </>
  )
}

export default Home
