import React from 'react'
import heroImg from "../../Assets/Group 6br-hero.png"

const Hero = () => {
  return (
    <section className='mx-10 sm:mx-5 mt-10 px-10 sm:px-5 py-12 bg-white flex md-2:gap-5 md-2:flex-col justify-between rounded-2xl'>
        <div className='my-auto'>
            <h2 className='font-medium sm:text-center sm:text-3xl text-7xl'>Join the <span className='text-[#6869ff]'>Future</span>
            <br className='sm:hidden' /> of Roadside <br className='sm:hidden' /> Assistance
            </h2>
            <p className='font-normal sm:text-center sm:text-[#000000b3] sm:text-sm text-lg my-5'>
            Sign up for early access to our <span className='text-[#6869ff]'>groundbreaking</span> roadside assistance app
            </p>
            <div className='bg-[#F8F8FF] sm:hidden p-2 md-2:flex md-2:justify-between w-fit md-2:w-full rounded-xl' style={{border: '1px solid #0000000d'}}>
<input type="email" className='h-[49px] md-2:w-[70%] pl-4 sm:pr-0 pr-28 focus:outline-none bg-transparent' placeholder='Your email'  />
<button className='bg-[#6869ff] text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
        </div>
        <div className='bg-[#F2F2F2] h-[700px] sm:h-[353px] pt-20 px-10 rounded-2xl md-2:w-full w-[45%]'>
            <img src={heroImg} className='h-full w-full ' alt="Hero image" />
        </div>
        <div className='md-2:flex mt-5 gap-3 hidden flex-col md-2:justify-between w-full md-2:w-full rounded-xl'>
<input type="email" className='h-[49px] w-full bg-[#F8F8FF] pl-4  focus:outline-none ' placeholder='Your email'  />
<button className='bg-[#6869ff] text-white w-fit mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
    </section>
  )
}

export default Hero