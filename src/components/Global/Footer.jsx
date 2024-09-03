import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Iconlandinf-page (3).png"
import { FaInstagram, FaTwitter , FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white mb-10'>
      <section className='flex justify-between w-[90%] mx-auto pt-10'>
        <div className='my-auto'>
       <div className='flex gap-3'>
       <img src={logo} className='w-[68px] h-[68px]' alt="Logo" />
       <h2 className='my-auto text-[#00000080] font-medium'>Breakdown <br /> Assistance</h2>
       </div>
        </div>
        <nav className='my-auto'>
  <ul className='flex gap-8'>
    <li>
      <Link to="/" className={  "text-[#000000cc] font-medium text-base"}>Home</Link>
    </li>
    <li>
      <Link to="/about" className={  "text-[#000000cc] font-medium text-base"}>About us</Link>
    </li>
    <li>
      <Link to="/service-provider" className={  "text-[#000000cc] font-medium text-base"}>Service providers</Link>
    </li>
    <li>
      <Link to="/contact" className={ "text-[#000000cc] font-medium text-base"}>Contact us</Link>
    </li>
    <li>
      <Link to="/service-provider" className={  "text-[#000000cc] font-medium text-base"}>FAQs </Link>
    </li>
  </ul>
</nav>
        <div className='flex gap-5 my-auto'>
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
      </section>
      <section className='flex justify-between w-[90%] mx-auto pt-8 mt-8' style={{borderTop: "1px solid #0000001a"}}>
      <div className='flex gap-3'>
        <p>&copy; All right reserved</p> <span className='bg-black my-auto w-[5px] h-[5px] rounded-full'></span>
        <p>Breakdown assistance</p>
      </div>
      <div>
        <ul className='flex gap-5'>
          <li>
            <Link to="/terms-and-condition" className="underline font-normal text-base">Terms & Condition</Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="underline font-normal text-base">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      </section>
    </footer>
  )
}

export default Footer