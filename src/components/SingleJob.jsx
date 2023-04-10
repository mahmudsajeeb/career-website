import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import img from '../assets/All Images/Vector.png'
import imgtwo from '../assets/All Images/Vector-1.png'
function SingleJob() {
  const [details,setDetails] = useState({})
  const dynamic = useParams()
  const dynamicId = dynamic.id;
  // console.log(dynamicId)
  const data = useLoaderData()
  console.log(data)

  useEffect(()=>{
    if(data){
      const detailsData = data.find(data => data.id ==dynamicId)
      setDetails(detailsData)
    }
  },[])

  console.log(details)
  return (
    <>
     <div className='flex justify-between items-center'>
     <div > <img src={img} alt="" /></div>
     <h1 className='text-4xl font-semibold'>Job Details</h1>
      <div><img src={imgtwo} alt="" /></div>
     </div>
        <div className='my-container grid grid-cols-2 mx-auto'> 
          <div>
          <p className='w-50'><span className='text-2xl font-semibold'>Job Description</span>{details.description}</p>
          <p className='w-50'><span className='text-2xl font-semibold'>Job Responsibility</span>{details.res}</p>
          <h3 className='text-3xl font-semibold'>Educational Requirements:</h3>
          <p>Bachelor degree to complete any reputational university.</p>
          <h3 className='text-3xl font-semibold'>Experiences:</h3>
          <p>2-3 Years in this field.</p>
          </div>

          <div>
          <div className=" relative lg:w-20/1  bg-white rounded-lg overflow-hidden shadow-md"> 
          <div className="px-6 py-4">
          <h1 className='text-3xl devide-y'>Job Details</h1>
             
             
            <div className='divide-y'></div>
            <h3 className='text-2xl'>Salary<span className="text-gray-700 mt-2 inline-block">{details.salary}</span></h3>
            <h3 className='text-2xl'>Job Title: <span className="text-gray-700 mt-2 inline-block">{details.job}</span></h3>
            <p className="text-gray-700 mb-2">{details.name}</p>
           
          <br />
          <h2 className='text-2xl'>Contact Information</h2>
          <p><span>Phone</span>{details.phone}</p>
          <p><span>Email</span>{details.email}</p>
          <span className="text-gray-700 mt-2">{details.location}</span> 
          
          <button className="block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2">
            Apply Now
          </button>
        
      </div>
    </div>
          </div>
        </div>
    </>
  )
}

export default SingleJob