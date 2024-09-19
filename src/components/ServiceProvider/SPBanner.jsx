import React from 'react'

const SPBanner = ({img}) => {
  return (
    <div className='bg-[#6869FF] pb-10 pt-0 sm:pt-10 my-20 rounded-lg sm:mx-2 flex sm:flex-col justify-between mx-10 pl-10 pr-32 sm:pr-5 sm:pl-5'>
        <section className='my-auto'>
            <h2 className='text-white text-5xl sm:text-2xl sm:text-center'>Don’t miss out</h2>
            <p className='text-white text-base font-normal mt-3 mb-16 sm:mb-6 sm:text-center sm:text-sm'>Stay connected and never miss out on important updates, exclusive <br /> offers, and the latest features.</p>
            <div className='bg-[#fff] p-2 sm:mx-auto w-fit sm:w-full rounded-xl' style={{border: '1px solid #0000000d'}}>
<input type="email" className='h-[49px] pl-4 pr-36 sm:pr-0 focus:outline-none bg-transparent' placeholder='Your email'  />
<button className='bg-[#6869ff] sm:float-right sm:text-xs text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
        </section>
        <section className='mt-36'>
            <img src={img} className='h-[577px] sm:h-[449px] sm:w-full' alt="Banner image" />
        </section>
    </div>
  )
}

export default SPBanner