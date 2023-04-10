import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Feature from './Feature'

export default function Features() {

  const [features,setFeatures] = useState([])
  const [show,setshowAll] = useState(false)

  const showALLdata =()=>{
    setshowAll(true)
  }
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setFeatures(data))
  },[])
  return (
    <>
    <div className='grid gap-4 md:grid-cols-2 text-center mx-auto'>
    {
      features.slice(0,show? 8 :4).map(feature => <Feature key={feature.id} feature={feature}/>)
    }
   
    </div>
     
  {
    !show && (
     <div className='text-center'>
     <span className='inline-block' onClick={showALLdata}>
        <button className="block mx-auto mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ">
            Show All
          </button>
    </span>
     </div>
    )
  }
  
    </>  
  )
}
