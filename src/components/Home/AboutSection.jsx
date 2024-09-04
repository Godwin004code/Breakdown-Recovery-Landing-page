import React from 'react'
import img1 from "../../Assets/our missionw-1.png"
import img2 from "../../Assets/Groupv.png"
import img3 from "../../Assets/Group 1000001775values.png"
import img4 from "../../Assets/happy customers 1w-4.png"
import img5 from "../../Assets/Illustrationw-5.png"

const AboutSection = () => {
  return (
    <section className='mt-10 bg-white mx-10 sm:mx-5 sm:px-5 rounded-2xl py-10 px-10'>
      <h2 className='bg-[#6869ff1f] w-fit px-4 sm:text-sm py-1 rounded-[20px] mx-auto'>About us</h2>
      <h2 className='text-center font-medium text-4xl sm:text-xl my-2'>Who are we</h2>
      <h2 className='text-center text-[#000000b3] sm:text-sm font-normal'>Discover the key features that make our breakdown recovery app your go-to solution for <br /> roadside assistance</h2>
      <section className='mt-20 sm:mt-10 flex md-2:flex-col gap-10'>
        <div className='bg-[#F8F8FF] flex flex-col justify-between w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Our Mission</h2>
          <img src={img1} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] text-base sm:text-sm font-normal'>We aim to revolutionize roadside assistance by providing quick, reliable, and seamless service to reduce the stress of vehicle breakdowns.</p>
        </div>
        <div className='bg-[#F8F8FF] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Our Vision</h2>
          <img src={img2} className='w-[200px]  my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] text-base sm:text-sm font-normal'>We envision a world where vehicle breakdowns are hassle-free, with help always just a few taps away.</p>
        </div>
        <div className='bg-[#F8F8FF] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Our Values</h2>
          <img src={img3} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] sm:text-sm text-base font-normal'>Integrity, efficiency, and customer satisfaction are at the core of our service.</p>
        </div>
      </section>
      <section className='mt-10 md-2:flex-col flex gap-10'>
        
        <div className='bg-[#F8F8FF] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Our Technology </h2>
          <img src={img4} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] sm:text-sm text-base font-normal'>Our customers are at the heart of everything we do. We prioritize their safety, convenience, and satisfaction, constantly seeking feedback to enhance our services and ensure a positive experience every time.</p>
        </div>
        <div className='bg-[#F8F8FF] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Our Technology </h2>
          <img src={img5} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] sm:text-sm text-base font-normal'>We use advanced technology to make roadside assistance accessible, reliable, and efficient.</p>
        </div>
      </section>
    </section>
  )
}

export default AboutSection