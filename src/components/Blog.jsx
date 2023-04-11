 import React from 'react'
 import img from '../assets/All Images/Vector.png'
 import imgtwo from '../assets/All Images/Vector-1.png'
 export default function Blog() {
   return (
    <>
    <div className='flex justify-between items-center'>
    <div > <img src={img} alt="" /></div>
    <h1 className='text-4xl font-semibold'>Blog Post</h1>
     <div><img src={imgtwo} alt="" /></div>
    </div>
      
      <div className='max-w-screen-xl text-center sm:mx-auto'>
        <div className='  gap-16 row-gap-8 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              When should you use context API?
              </p>
              <p className='text-gray-700'>
              The Context API in React should be used when you need to pass data or state down through multiple levels of your component tree, without having to manually pass props to each individual component. It is a way to share data between components that are not directly related to each other, avoiding the need to pass data through intermediary components that do not use the data themselves.
                <br />
                
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What is a custom hook?
              </p>
              <p className='text-gray-700'>
              Custom hooks are built on top of the existing React Hooks API, and can use other hooks internally to provide functionality. They can handle complex state management, side effects, and other features, just like regular React components.
                <br />
                 
             </p>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What is useRef?
              </p>
              <p className='text-gray-700'>
              useRef can also be used to store any mutable value, not just DOM elements. This can be useful when you need to keep track of a value across re-renders without triggering a re-render of the component.
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What is useMemo?
              </p>
              <p className='text-gray-700'>
              In React, the useMemo hook is a function that can be used to memoize expensive calculations so that they are only recomputed when their dependencies change. This can help improve the performance of your application by avoiding unnecessary re-renders and calculations.
                <br />
                
              </p>
            </div>
 
          </div>
        </div>
      </div>
     </div>
     </>
   )
 }
 