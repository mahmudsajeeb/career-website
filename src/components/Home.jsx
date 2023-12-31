import React from 'react'
import jobProfile from "../assets/jobman.jpg" 
import { Link } from 'react-router-dom'
import Jobscategory from './Jobscategory'
import Features from './Features'

const Home = () => {
  return (
    <>
    <div className='my-container'>

    <div className=' flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>  

          <h2 className='max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          One Step <br className='hidden md:block' /> Closer To Your{' '}
            <span className='  md:block text-blue-400'> Dream Job</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
            <button className="bg-gradient-to-r hidden md:block  from-blue-400 via-indigo-500 to-purple-500 text-white font-bold py-2 px-4 rounded">Get Started </button>
            </div>
          </Link>
 
        </div>
      </div>
      
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <img className='object-cover' src={jobProfile} alt="jobProfile" />
        </div>
      </div>
 
    </div>
      {/* Job Category List ---------------------*/}
      <h1 className='text-center text-3xl  font-semibold'>Job Category List</h1>
      <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="job-category">
        <Jobscategory />
      </div>
      {/* Featured Jobs section --------- */}

      <h1 className='text-center text-4xl font-semibold '>Featured Jobs</h1>
      <p  className='text-center mt-5'> Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='mt-24'>
        <Features />
      </div>
    </div>

    </>
  )
}

export default Home
