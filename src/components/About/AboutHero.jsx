import React from 'react'
import img from "../../Assets/happy driver 1.png"

const AboutHero = () => {
  return (
    <>
    <section className='mt-10 relative'>
        <img src={img} className=' w-full ' alt="happy driver" />
        <section className='bg-[#00000033] pb-20 pl-10 absolute top-0 flex justify-between flex-col w-full h-full'>
            <div></div>
<h2 className='font-medium text-5xl text-white '>About us</h2>
        </section>
    </section>
    <section className='w-[90%] mx-auto mt-16'>
        <h2 className='font-medium text-5xl '>Swift and Reliable Roadside Assistance</h2>
        <p className='font-normal text-base text-[#000000b3] mt-3'>We provide fast, reliable roadside assistance with trusted service providers, transparent pricing, and easy-to-use features, ensuring you're back on the road in no time.</p>
    </section>
    <section className='w-[90%] mx-auto mt-12'>
        <h2 className="pb-5 mb-5 font-medium text-base" style={{borderBottom: '1px solid #00000033'}}>Read our Vision and Mission statement</h2>
        <h2 className='font-semibold text-xl '>Mission Statement</h2>
        <p>To deliver fast, dependable roadside assistance through innovative technology and a trusted network of service providers, ensuring every driver feels safe and supported on the road.</p>
        <h2 className='font-semibold text-xl mt-5'>Vision Statement</h2>
        <p>To be the leading platform for roadside assistance, revolutionizing the way drivers connect with services, and setting a new standard for safety, reliability, and customer satisfaction worldwide.</p>
    </section>
    </>
  )
}

export default AboutHero