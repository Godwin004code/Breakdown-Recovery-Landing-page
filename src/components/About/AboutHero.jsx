import React from 'react'
import img from "../../Assets/happy driver 1.png"

const AboutHero = () => {
  return (
    <>
    <section className='mt-10 sm:w-[90%] sm:mx-auto relative'>
        <img src={img} className=' w-full sm:h-[320px] sm:object-cover' alt="happy driver" />
        <section className='bg-[#00000033] pb-20 sm:pb-10 sm:pl-6 pl-10 absolute top-0 flex justify-between flex-col w-full h-full'>
            <div></div>
<h2 className='font-medium text-5xl text-white '>About us</h2>
        </section>
    </section>
    <section className='w-[90%] mx-auto mt-16'>
        <h2 className='font-medium text-5xl sm:text-2xl'>Swift and Reliable Roadside Assistance</h2>
        <p className='font-normal text-base text-[#000000b3] sm:text-sm mt-3'>We provide fast, reliable roadside assistance with trusted service providers, transparent pricing, and easy-to-use features, ensuring you're back on the road in no time.</p>
    </section>
    <section className='w-[90%] mx-auto mt-12'>
        <h2 className="pb-5 mb-5 font-medium text-base sm:text-sm" style={{borderBottom: '1px solid #00000033'}}>Read our Vision and Mission statement</h2>
        <h2 className='font-semibold text-xl sm:text-base'>Mission Statement</h2>
        <p className=' sm:text-sm text-[#000000b3]'>To deliver fast, dependable roadside assistance through innovative technology and a trusted network of service providers, ensuring every driver feels safe and supported on the road.</p>
        <h2 className='font-semibold text-xl mt-5 sm:text-base'>Vision Statement</h2>
        <p className=' sm:text-sm text-[#000000b3]'>To be the leading platform for roadside assistance, revolutionizing the way drivers connect with services, and setting a new standard for safety, reliability, and customer satisfaction worldwide.</p>
    </section>
    </>
  )
}

export default AboutHero