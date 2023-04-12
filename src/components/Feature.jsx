import React from 'react'
import { Link } from 'react-router-dom'

function Feature({feature}) {
  const {id} =feature
  return (
    <>
     <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className='featurs-img'>
      <img className="w-50" src={feature.picture}   />
      </div>
      <div className="px-6 py-4">
        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
        <p className="text-gray-700 mb-2">{feature.name}</p>
        <button className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
          {feature.category1}
        </button>
        <button className="inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2">
          {feature.category2}
        </button>
        <br />
        <span className="text-gray-700 mt-2">{feature.location}</span>  <span className="text-gray-700 mt-2 inline-block">{feature.salary}</span>
       <Link to={`singlejob/${id}`}>
       <button className="block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2">
          View Details
        </button>
       </Link>
      </div>
    </div>
    </>
  )
}

export default Feature