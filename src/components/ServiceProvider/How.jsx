import React from 'react'
import img from "../../Assets/iPhone 15 Pro Portrait Mockup (1).png"

const How = () => {
  return (
    <div className='bg-white mx-10 sm:mx-2 flex sm:flex-col justify-center rounded-2xl py-20 mb-20 sm:mb-10'>
<div className='w-[40%] sm:w-[70%] sm:mx-auto flex justify-center'>
    <img src={img} className='h-[600px] sm:h-[440px]' alt="how the Service provider app works" />
</div>
<div className='w-[50%] sm:w-full  pr-16 sm:pr-4 pl-4'>
    <h2  className='font-medium text-4xl text-[#000000] sm:text-xl sm:mt-9'>How the Service provider app works</h2>
    <p className='text-[#000000b3] font-normal text-base sm:text-sm mb-5 mt-2'>Reliable and easy to use, with everything you need to work and earn when you want.</p>
    <div className='flex gap-5 mb-5 w-full'>
        <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>1</div>
        <div className='gap-2 flex flex-col  w-[90%] '>
            <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Sign up and set up profile</h2>
            <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Download the app, create an account, and set up your profile with your skills, services offered, and availability.</p>
        </div>
    </div>
    <div className='flex gap-5 mb-5'>
        <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>2</div>
        <div className='gap-2 flex flex-col w-[90%]'>
            <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Receive Job Requests</h2>
            <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Get notified of nearby service requests. Review the job details and decide whether to accept or decline the request.</p>
        </div>
    </div>
    <div className='flex gap-5 mb-5'>
        <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>3</div>
        <div className='gap-2 flex flex-col  w-[90%]'>
            <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Provide Assistance</h2>
            <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Navigate to the customer's location using the app's integrated GPS, and provide the requested roadside assistance.</p>
        </div>
    </div>
    <div className='flex gap-5 mb-5 sm:mb-0'>
        <div className='w-[30px] h-[30px] bg-[#6869FF] text-white flex justify-center items-center rounded-full'>4</div>
        <div className='gap-2 flex flex-col  w-[90%]'>
            <h2 className='font-medium text-xl sm:text-base text-[#000000cc]'>Complete Job and Get Paid</h2>
            <p className='text-[#000000b3] font-normal sm:text-sm text-base'>Once the job is done, mark it as complete in the app. Receive secure payment directly through the app after customer confirmation.</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default How