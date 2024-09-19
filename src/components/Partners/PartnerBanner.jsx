import React from 'react'

const PartnerBanner = () => {
  return (
    <div className='bg-[#6869FF]  py-20  mb-20 rounded-lg sm:mx-2 flex sm:flex-col justify-between mx-10 sm:pr-5 sm:pl-5'>
    <section className='my-auto w-full'>
        <h2 className='text-white text-5xl text-center sm:text-2xl sm:text-center'>Ready to Partner with Us?</h2>
        <p className='text-white text-base text-center font-normal mt-3 mb-16 sm:mb-6 sm:text-center sm:text-sm'>Join our network today and start benefiting from a partnership  <br /> that drives success.</p>
        <div className='bg-[#fff] p-2 sm:p-0 sm:mx-auto w-fit mx-auto  rounded-xl' style={{border: '1px solid #0000000d'}}>

<button className=' sm:text-base text-[#6869ff] my-auto text-xl font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
        </div>
    </section>
    
</div>
  )
}

export default PartnerBanner