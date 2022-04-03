import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/apple-logo.svg'
import {XIcon, MenuIcon} from '@heroicons/react/solid'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
   <header className='bg-black  h-[44px] px-[10%] flex justify-between items-center text-white '>
       <img src={logo} alt="" />
       <nav className={ `flex gap-6 md:gap-16 justify-between md:justify-end items-center absolute w-full md:static flex-col md:flex-row transition delay-200 ease-in-out  z-10 bg-black ${menuOpen ? 'top-[44px] left-0 w-full pb-5' : 'top-[-300px]'}`}>
           <Link to='/'>Home</Link>
           <Link to='/reviews'>Reviews</Link>
           <Link to='/blog'>Blog</Link>
           <Link to='/about'>About</Link>
           <Link to='/dashboard'>DashBoard</Link>
       </nav>
       <div onClick={() => setMenuOpen(!menuOpen)} className=' w-6 md:hidden transition delay-75'>
        {menuOpen ? <XIcon/> : <MenuIcon/> }
       </div>
   </header>
  )
}

export default Header