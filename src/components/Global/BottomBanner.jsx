import React from 'react'

const BottomBanner = ({img}) => {
  return (
    <div className='bg-[#6869FF] py-10 my-20 flex justify-between mx-10 px-10'>
        <section className='my-auto'>
            <h2 className='text-white text-5xl'>Don’t miss out</h2>
            <p className='text-white text-base font-normal mt-3 mb-16'>Stay connected and never miss out on important updates, exclusive <br /> offers, and the latest features.</p>
            <div className='bg-[#fff] p-2 w-fit rounded-xl' style={{border: '1px solid #0000000d'}}>
<input type="email" className='h-[49px] pl-4 pr-36 focus:outline-none bg-transparent' placeholder='Your email'  />
<button className='bg-[#6869ff] text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Join waitlist</button>
            </div>
        </section>
        <section>
            <img src={img} className='h-[577px]' alt="Banner image" />
        </section>
    </div>
  )
}

export default BottomBanner