import React from 'react'
import img from "../../Assets/image 4bop.png"

const PartnerBenefit = () => {
  return (
    <div className=' mx-10 sm:mx-2 flex sm:flex-col justify-center rounded-2xl py-20 sm:pt-5 mb-0 sm:mb-0'>
    
    <div className='w-[50%] sm:w-full  pr-16 sm:pr-4 pl-4'>
        <h2  className='font-medium text-4xl text-[#000000] sm:text-xl sm:mt-9'>Benefits of Partnership</h2>
        <p className='text-[#000000b3] font-normal text-base sm:text-sm mb-5 mt-2'>Unlock new opportunities and grow your business by joining our trusted network</p>
        <div className='flex gap-5 mb-5 w-full'>
            <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>1</div>
            <div className='gap-2 flex flex-col  w-[90%] '>
                <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>High Growth Potential</h2>
                <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Invest in a rapidly expanding market with significant demand for reliable roadside assistance services. As the app scales, your investment has the potential to yield substantial returns.</p>
            </div>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>2</div>
            <div className='gap-2 flex flex-col w-[90%]'>
                <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Diversified Revenue Streams</h2>
                <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Benefit from multiple income sources, including subscription fees, service commissions, and in-app advertising, which can contribute to steady, long-term financial gains.</p>
            </div>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>3</div>
            <div className='gap-2 flex flex-col  w-[90%]'>
                <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Strategic Industry Position</h2>
                <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Align yourself with a company that occupies a crucial role in the automotive service industry. Your investment supports innovation in a sector that's essential for millions of vehicle owners.</p>
            </div>
        </div>
        <div className='flex gap-5 mb-5 sm:mb-0'>
            <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>4</div>
            <div className='gap-2 flex flex-col  w-[90%]'>
                <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Social Impact</h2>
                <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Contribute to a service that enhances road safety and provides peace of mind for drivers. Your investment not only generates financial returns but also supports a business with a positive societal impact.</p>
            </div>
        </div>
    </div>
    <div className='w-[40%] sm:w-[90%] sm:mt-10 sm:mx-auto flex justify-center'>
        <img src={img} className='h-[600px] sm:h-[440px]' alt="how the Service provider app works" />
    </div>
        </div>
  )
}

export default PartnerBenefit