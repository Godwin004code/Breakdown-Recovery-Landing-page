import React from 'react'
import logo from "../../Assets/Iconlandinf-page (3).png"
import { Link } from 'react-router-dom'

const Nav = () => {
  const pathName = window.location.pathname;
  return (
    <header className='flex bg-white w-fit mx-auto p-2 justify-center rounded-2xl' style={{border: '1px solid #0000001a'}}>
<div>
<Link to="/">  <img src={logo} className='w-[60px] h-[60px]' alt="Logo" /></Link>
</div>
<nav className='my-auto mx-8'>
  <ul className='flex gap-8'>
    <li>
      <Link to="/" className={pathName === "/" ? "text-[#6869FF] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Home</Link>
    </li>
    <li>
      <Link to="/about" className={pathName === "/about" ? "text-[#6869FF] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>About us</Link>
    </li>
    <li>
      <Link to="/service-provider" className={pathName === "/service-provider" ? "text-[#6869FF] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Service Provider</Link>
    </li>
    <li>
      <Link to="/contact" className={pathName === "/contact" ? "text-[#6869FF] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Contact</Link>
    </li>
   
  </ul>
</nav>
<button className='bg-[#6869ff] text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
    </header>
  )
}

export default Nav