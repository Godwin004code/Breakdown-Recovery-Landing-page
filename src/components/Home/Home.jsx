import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import Hero from './Hero'
import Features from './Features'
import zigzag from "../../Assets/Vectorzigzag (1).png"
import AboutSection from './AboutSection'
import Steps from './Steps'

const Home = () => {
  return (
    <section className='bg-[#F8F8FF] w-full pt-7 h-full'>
      <Nav />
      <Hero />
      <Features />
      <AboutSection />

      <Steps />
      <section className='bg-[#6869FF] mb-24 rounded-2xl mx-10 sm:mx-5 relative flex py-16 justify-center items-center flex-col'>
        <img src={zigzag} className='absolute sm:h-full sm:object-cover top-0 right-0 left-0 bottom-0' alt="" />
        <h2 className='font-medium text-4xl sm:text-2xl text-white'>Don’t miss out!</h2>
        <p className='text-[#ffffffcc] text-base sm:text-sm sm:text-center sm:px-5 font-normal mt-2 mb-8'>Sign up to join the waiting list and be the first to know when we launch</p>
        <div className='bg-[#F8F8FF] z-30 p-2 sm:w-[90%] sm:flex   w-fit sm:mx-auto  rounded-xl' style={{ border: '1px solid #0000000d' }}>
          <input type="email" className='h-[49px] pl-4 pr-28 sm:pr-0 focus:outline-none bg-transparent' placeholder='Your email' />
          <button className='bg-[#6869ff] text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default Home