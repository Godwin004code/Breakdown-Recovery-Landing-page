import React from 'react'
import img from "../../Assets/image 2pa.png"

const PartnersHero = () => {
  return (
    <section className='mt-10 sm:w-[90%] sm:mx-auto relative'>
        <img src={img} className=' w-full h-[600px] sm:h-[320px] sm:object-cover' alt="happy driver" />
        <section className='bg-[#00000033] pb-20 sm:pb-10 sm:pl-6 pl-10 absolute top-0 flex justify-between flex-col w-full h-full'>
            <div></div>
<h2 className='font-medium text-5xl sm:text-2xl text-white '>Become a partner</h2>
        </section>
    </section>
  )
}

export default PartnersHero