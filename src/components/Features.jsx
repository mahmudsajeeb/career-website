import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Feature from './Feature'

export default function Features() {

  const [features,setFeatures] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setFeatures(data))
  },[])
  return (
    <div className='grid md:grid-cols-2 text-center mx-auto'>
    {
      features.map(feature => <Feature key={feature.id} feature={feature}/>)
    }
    </div>
  )
}
