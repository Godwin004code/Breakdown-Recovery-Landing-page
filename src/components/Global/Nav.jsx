import React, {useState} from 'react'
import logo from "../../Assets/Iconlandinf-page (3).png"
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter , FaFacebook, FaCheck } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Nav = () => {
  const pathName = window.location.pathname;
  const [mobileShown, setMobileShown] = useState(false);
  const [showPopup, setShowPopup] = useState(false)
  function toggleNav() {
    setMobileShown(!mobileShown);
  }
  return (<>
    <header className='flex bg-white w-fit sm:w-[90%] sm:justify-between sm:p-0 sm:bg-transparent border  sm:border-0  mx-auto p-2 justify-center rounded-2xl'>
<div>
<Link to="/">  <img src={logo} className='w-[60px]  h-[60px]' alt="Logo" /></Link>
</div>
<nav className='my-auto mx-8 sm:hidden'>
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
      <Link to="/partners" className={pathName === "/partners" ? "text-[#6869FF] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Partners</Link>
    </li>
    <li>
      <Link to="/contact" className={pathName === "/contact" ? "text-[#6869FF] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Contact</Link>
    </li>
   
  </ul>
</nav>
<button className='bg-[#6869ff] sm:hidden text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl' onClick={() => setShowPopup(true)}>Join waitlist</button>
<div className='my-auto hidden sm:block' onClick={toggleNav}>
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H30M6 24H30" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div
          className={`${
            mobileShown
              ? "left-[0%] pointer-events-auto"
              : "left-[100%] pointer-events-none"
          } fixed bg-[#f8f8ff] h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
        >
          {/* Container for logo and cross button */}
          <div className="w-[90%] mx-auto py-10 mb-[40px] flex justify-between">
            <Link to="/">
              {" "}
              <img src={logo} className="w-[55px] h-[55px]" alt="logo" />
            </Link>
            <button onClick={toggleNav}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.137 25.8638L18.0015 17.9993L25.866 25.8638M25.866 10.1348L18 17.9993L10.137 10.1348" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>

          <ul className="flex justify-center text-center my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
            <li>
              <Link to="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium">
                About Us
              </Link>
            </li>
           
            <li>
              <Link to="/service-provider" className="font-medium">
                Service Providers
              </Link>
            </li>
            <li>
              <Link to="/partners" className="font-medium">
                 Partners
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium">
                Contact Us
              </Link>
            </li>

            <div className='flex w-full justify-center mt-10 gap-10 my-auto'>
          <div className='bg-[#6869ffc4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaInstagram color='white' size={24} />
          </div>
          <div className='bg-[#6869ffc4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaTwitter color='white' size={24}  />
          </div>
          <div className='bg-[#6869ffc4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaFacebook color='white' size={24}  />
          </div>
        </div>
          </ul>
        </div>
    </header>
   <div className={showPopup  === true ? 'block' : 'hidden'}>
   <section className={ 'bg-[#00000040] h-[100vh] flex justify-center items-center absolute top-0 w-full z-20'} >
<section className={'bg-white sm:mx-5 w-fit  mx-auto flex flex-col justify-center items-center p-5 rounded-xl'}>
  <FaX  onClick={() => setShowPopup(false)} size={10} color='#2C3E50' className='ml-auto cursor-pointer mb-2'/>
  <div className='w-[160px] sm:w-[90px] sm:h-[90px] h-[160px] mb-10 flex justify-center items-center rounded-full bg-[#6869ff]'>
<FaCheck className='text-white w-[100px] sm:w-[40px] sm:h-[80px] h-[150px]' />
  </div>
<h2 className='text-center text-3xl sm:text-lg'>We've added you to our</h2>
<h2 className='text-center text-3xl sm:text-lg mt-2'>waiting list!</h2>
<p className='text-[#00000099] text-center sm:text-sm mt-2'>We’ll let you when Breakdown Assistance is ready.</p>
<div className='bg-[#6869ff] p-4 rounded-[2px] mt-4 w-full'>
<div className='bg-white flex pl-3'>
<svg className='my-auto' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_498_9684)">
<path d="M3.85107 9.23525C3.85107 8.59282 4.10628 7.97671 4.56054 7.52245C5.0148 7.06819 5.63091 6.81299 6.27333 6.81299H23.2291C23.8716 6.81299 24.4877 7.06819 24.9419 7.52245C25.3962 7.97671 25.6514 8.59282 25.6514 9.23525V21.3465C25.6514 21.989 25.3962 22.6051 24.9419 23.0593C24.4877 23.5136 23.8716 23.7688 23.2291 23.7688H6.27333C5.63091 23.7688 5.0148 23.5136 4.56054 23.0593C4.10628 22.6051 3.85107 21.989 3.85107 21.3465V9.23525Z" stroke="#141414" stroke-width="1.81669" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.85107 9.23535L14.7512 16.5021L25.6514 9.23535" stroke="#141414" stroke-width="1.81669" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_498_9684">
<rect width="29.0671" height="29.0671" fill="white" transform="translate(0.217773 0.757324)"/>
</clipPath>
</defs>
</svg>

<input type="email" placeholder="hello@gmail.com" className='placeholder:text-black py-3 w-full focus:outline-none pl-3' id="" />
</div>
</div>
<button className='bg-[#6869ff]  text-white my-auto text-sm mt-3 font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
</section>
    </section>
   </div>
    </>
  )
}

export default Nav