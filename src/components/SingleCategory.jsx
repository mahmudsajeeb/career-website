import React from 'react'
import { IconContext } from "react-icons"; 

 
function SingleCategory({job}) {
  return (
    <>

    <div className='rounded-md   p-10 shadow-xl'>
      <img className='w-16 mb-20' src={job.img}/>
      <h1>{job.category_name}</h1>
      <p className='text-gray-400	'>{job.dec}</p>
    </div>
    </>
  )
}

export default SingleCategory