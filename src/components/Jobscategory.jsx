import React, { useEffect, useState } from 'react'
import SingleCategory from './SingleCategory'

export default function Jobscategory() {
  const [jobs,setJob] = useState([])
  useEffect(()=>{
    fetch('job.json')
    .then(res => res.json())
    .then(data => setJob(data))
  },[])
  return (
    <div className='grid my-container gap-4 lg:grid-cols-4 md:grid-cols-2'>
        {
          jobs.map(job => <SingleCategory key={job.id}  job={job} />)
        }
    </div>
  )
}
