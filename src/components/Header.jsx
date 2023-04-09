import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom' 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='HeroGadget'
          title='HeroGadget'
          className='inline-flex items-center'
        >
          
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
          Patagonia 
          </span>
        </Link>
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/statistics'
              aria-label='statistics'
              title='statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/applied-jobs'
              aria-label='applied-jobs'
              title='Applied Jobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
         

        
        {/* </div> */}
      </div>
    </div>
  )
}

export default Header
