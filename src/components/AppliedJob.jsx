import React, { useEffect, useState } from 'react'
 
import { useLoaderData } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'

export default function AppliedJob() {
   const {cartArray} = useLoaderData()
    

  return (
    <div className='py-20 justify-center flex flex-col gap-5'>
         {
          cartArray.map(singleJob =>{
             return <div className='flex justify-between rounded-md items-center border border-cyan-700 p-5 w-[80% mx-auto' >
               <div className='flex gap-9'>
                <div>
                  <img className='h-28 w-28 p-4 bg-gray-100' src={singleJob.picture} alt="" />
                </div>
                <div>
                  <h1 className='text-3xl'>{singleJob.title}</h1>
                  <h1 className='text-2xl'>{singleJob.name}</h1>
                  <button className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                  {singleJob.category1}
                </button>
                <button className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2">
                  {singleJob.category2}
                </button>
                  <div>
                  <span className="text-gray-700 mt-2">{singleJob.location}</span>  <span className="text-gray-700 mt-2 inline-block">{singleJob.salary}</span>
                  </div>

                </div>
                <div>
                
                <button className="  flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2">
                    View Details
                  </button>
              
                </div>
               </div>
             </div>
          })
         }
    </div>
  )
}
