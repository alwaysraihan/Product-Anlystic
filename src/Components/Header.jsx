import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/apple-logo.svg'

const Header = () => {
  return (
   <header className='bg-black  h-[44px] md:px-[10%] md:flex justify-between items-center text-white '>
       <img src={logo} alt="" />
       <nav className='md:flex gap-16 justify-between items-center'>
           <Link to='/'>Home</Link>
           <Link to='/reviews'>Reviews</Link>
           <Link to='/blog'>Blog</Link>
           <Link to='/about'>About</Link>
           <Link to='/dashboard'>DashBoard</Link>
       </nav>

   </header>
  )
}

export default Header