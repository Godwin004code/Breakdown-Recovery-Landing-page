import React from 'react'
import img from "../../Assets/image 1.png"

const SPHero = () => {
  return (
    <section className='mt-10 relative sm:w-[90%] sm:mx-auto h-[600px] sm:h-[320px]'>
    <img src={img} className=' w-full h-full object-cover' alt="happy driver" />
    <section className='bg-[#00000033] pb-0 pl-10 sm:pl-5 sm:pr-5 absolute top-0 flex justify-center flex-col w-full h-full'>
   
<h2 className='font-medium text-5xl text-white sm:text-2xl leading-[60px]'>Make money providing <br/> roadside assistance with <br /> Breakdown assistance</h2>
<h2  className='font-normal mt-10 text-2xl sm:text-sm text-white '>Become a service provider, set your schedule and earn money.</h2>
    </section>
</section>
  )
}

export default SPHero