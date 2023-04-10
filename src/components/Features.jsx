import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Features() {

  const featureData = useLoaderData()
  console.log(featureData)
  return (
    <div>Features</div>
  )
}
