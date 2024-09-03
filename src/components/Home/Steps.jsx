import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import img from "../../Assets/Group 1000001776eki.png"
import line from "../../Assets/Vector 58line.png"

const Steps = () => {
    return (
        <div className='w-[90%]  flex relative mx-auto my-20'>
            
          
       
        <section className='flex'>
            <section className='z-10'>
                <h2 className='font-medium text-4xl mb-10'>Easy steps to use the app</h2>
                <div className='bg-white p-5 w-fit gap-7 mb-5 flex rounded-2xl'>
                    <div className='bg-[#6869ff0d] w-[60px] h-[60px] flex justify-center rounded-lg items-center'>
                        <FaLocationDot color='#6869FF' size={20} />
                    </div>
                    <div>
                        <h2 className='font-medium text-2xl'>Request Assistance</h2>
                        <p className='text-[#00000099] text-base font-regular mt-3'>Select the service you need, like a tire change or a recovery service, and submit your request through the app. We'll find the nearest provider right away.</p>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit gap-7 mb-5 flex rounded-2xl'>
                    <div className='bg-[#6869ff0d] w-[60px] h-[60px] flex justify-center rounded-lg items-center'>
                        <FaLocationDot color='#6869FF' size={20} />
                    </div>
                    <div>
                        <h2 className='font-medium text-2xl'>Get Matched</h2>
                        <p className='text-[#00000099] text-base font-regular mt-3'>We instantly connect you with a nearby provider. You'll receive updates with their details and estimated arrival time.</p>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit gap-7 mb-5 flex rounded-2xl'>
                    <div className='bg-[#6869ff0d] w-[60px] h-[60px] flex justify-center rounded-lg items-center'>
                        <FaLocationDot color='#6869FF' size={20} />
                    </div>
                    <div>
                        <h2 className='font-medium text-2xl'>Receive Help</h2>
                        <p className='text-[#00000099] text-base font-regular mt-3'>Your provider arrives promptly to assist with your vehicle, whether you're on the roadside or in a parking lot.</p>
                    </div>
                </div>
                <div className='bg-white p-5 w-fit gap-7 mb-5 flex rounded-2xl'>
                    <div className='bg-[#6869ff0d] w-[60px] h-[60px] flex justify-center rounded-lg items-center'>
                        <FaLocationDot color='#6869FF' size={20} />
                    </div>
                    <div>
                        <h2 className='font-medium text-2xl'>Rate and Pay</h2>
                        <p className='text-[#00000099] text-base font-regular mt-3'>Rate your experience and securely complete your payment through the app using your preferred method.</p>
                    </div>
                </div>
            </section>
         <img src={line} className='h-[722px] ml-[-100px]' alt="" />
            <div>
            <img src={img} className='h-[700px]' alt="Steps" />
            </div>
            </section>
      
       
        </div>
    )
}

export default Steps

//   <div className='bg-red-500 mx-auto w-[500px] h-[500px] rounded-full'>  </div>
      