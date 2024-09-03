import React from 'react'
import heroImg from "../../Assets/Group 6br-hero.png"

const Hero = () => {
  return (
    <section className='mx-10 mt-10 px-10 py-12 bg-white flex justify-between rounded-2xl'>
        <div className='my-auto'>
            <h2 className='font-medium text-7xl'>Join the <span className='text-[#6869ff]'>Future</span>
            <br /> of Roadside <br /> Assistance
            </h2>
            <p className='font-normal text-lg my-5'>
            Sign up for early access to our <span className='text-[#6869ff]'>groundbreaking</span> roadside assistance app
            </p>
            <div className='bg-[#F8F8FF] p-2 w-fit rounded-xl' style={{border: '1px solid #0000000d'}}>
<input type="email" className='h-[49px] pl-4 pr-28 focus:outline-none bg-transparent' placeholder='Your email'  />
<button className='bg-[#6869ff] text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
        </div>
        <div className='bg-[#F2F2F2] h-[700px] pt-20 px-10 rounded-2xl w-[45%]'>
            <img src={heroImg} className='h-full w-full ' alt="Hero image" />
        </div>
    </section>
  )
}

export default Hero