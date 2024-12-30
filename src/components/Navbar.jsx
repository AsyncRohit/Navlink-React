import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-6 flex justify-between items-center py-4 bg-pink-500 '>
        <NavLink to={'/'}
        className={'font-bold'}
        >
            Sheriyans
        </NavLink>
    <div className='flex gap-10'>
        <NavLink to={'/'}
        className={({isActive})=> isActive? 'text-white font-bold' : 'text-black font-bold'}
        >
            Home
        </NavLink>
        <NavLink to={'/contact'}
        className={({isActive})=> isActive? 'text-white font-bold' : 'text-black font-bold'}
        >
            Contact
        </NavLink>
        <NavLink to={'/about'}
        className={({isActive})=> isActive? 'text-white font-bold' : 'text-black font-bold'}
        >
            About
        </NavLink>
        <NavLink to={'/services'}
        className={({isActive})=> isActive? 'text-white font-bold' : 'text-black font-bold'}
        >
            Services
        </NavLink>
        <NavLink to={'/courses'}
        className={({isActive})=> isActive? 'text-white font-bold' : 'text-black font-bold'}
        >
            Courses
        </NavLink>

    </div>
    </div>
  )
}

export default Navbar