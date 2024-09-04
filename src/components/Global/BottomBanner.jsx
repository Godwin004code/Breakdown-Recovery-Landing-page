import React from 'react'

const BottomBanner = ({img}) => {
  return (
    <div className='bg-[#6869FF] py-10 my-20 sm:mx-2 sm:rounded-xl sm:pb-24 flex sm:flex-col justify-between mx-10 sm:px-5 px-10'>
        <section className='my-auto'>
            <h2 className='text-white text-5xl sm:text-2xl sm:text-center'>Don’t miss out</h2>
            <p className='text-white text-base sm:text-sm sm:text-center font-normal mt-3 mb-16 sm:mb-10'>Stay connected and never miss out on important updates, exclusive <br /> offers, and the latest features.</p>
            <div className='bg-[#fff] z-30 sm:hidden p-2 w-fit rounded-xl' style={{border: '1px solid #0000000d'}}>
<input type="email" className='h-[49px] pl-4 pr-36 focus:outline-none bg-transparent' placeholder='Your email'  />
<button className='bg-[#6869ff] text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
        </section>
        <section>
            <img src={img} className='h-[577px] sm:h-[292px]' alt="Banner image" />
        </section>
        <div className='bg-[#fff] z-40 mt-10 p-2 hidden w-full sm:flex sm:flex-col   rounded-xl' style={{border: '1px solid #0000000d'}}>
<input type="email" className='h-[49px] pl-4 pr-36 sm:pr-0 focus:outline-none bg-transparent' placeholder='Your email'  />
<button className='bg-[#6869ff] text-white sm:w-fit sm:mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
    </div>
  )
}

export default BottomBanner