import React from 'react'
import img1 from "../../Assets/iPhone 15 Pro Portrait Mockupbr-01 (1).png"
import img2 from "../../Assets/iPhone 15 Pro Portrait Mockupbr-02.png"
import img3 from "../../Assets/iPhone 15 Pro Portrait Mockupnew.png"
import img4 from "../../Assets/iPhone 15 Pro Portrait Mockupnew (1).png"

const Features = () => {
    return (
        <section className='mt-10'>
            <h2 className='bg-[#6869ff1f] w-fit px-4 py-1 rounded-[20px] mx-auto sm:text-sm' >Features</h2>
            <h2 className='text-center font-medium text-4xl my-2 sm:text-xl'>What makes us groundbreaking</h2>
            <h2 className='text-center text-[#000000b3] font-normal sm:text-sm sm:mx-10'>Discover the key features that make our breakdown recovery app your go-to solution for <br /> roadside assistance</h2>
            <section className='flex sm:flex-col sm:gap-5 mt-20 sm:mt-10 w-[70%] md-2:w-[90%] mx-auto justify-between'>
                <div className='bg-white w-[40%] sm:hidden sm:w-full md-2:w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[460px] sm:h-[300px]' src={img1} alt="Quick Assistance Image" />
                </div>
                <div className='w-[50%] sm:w-full md-2:w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl sm:text-xl'>Quick Assistance</h2>
                    <div className='bg-white w-[40%] hidden mt-6 sm:w-full md-2:w-[50%] sm:flex justify-center items-center pt-10 rounded-xl'>
                        <img className='h-[460px] sm:h-[300px]' src={img1} alt="Quick Assistance Image" />
                    </div>
                    <p className='text-[#000000b3] mt-4 sm:mt-6 font-normal sm:text-sm'>Effortlessly request roadside assistance with just a few taps on your phone, ensuring you receive immediate help from the closest available service providers, minimizing your wait time and getting you back on the road quickly.</p>
                </div>
            </section>
            <section className='flex sm:flex-col sm:gap-5 mt-20 w-[70%] md-2:w-[90%] mx-auto justify-between'>

                <div className='w-[50%] sm:w-full md-2:w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl sm:text-xl'>Real-Time Tracking</h2>
                    <div className='bg-white w-[40%] mt-6 hidden sm:w-full md-2:w-[50%] sm:flex justify-center items-center pt-10 rounded-xl'>
                        <img className='h-[460px] sm:h-[300px]' src={img2} alt="Quick Assistance Image" />
                    </div>
                    <p className='text-[#000000b3] mt-4 sm:mt-6 font-normal sm:text-sm'>Monitor the status of your service request in real-time from the moment you submit it until the service provider arrives, giving you peace of mind and accurate updates on the estimated time of arrival and progress.</p>
                </div>
                <div className='bg-white sm:w-full sm:hidden w-[40%] md-2:w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[460px] sm:h-[300px]' src={img2} alt="Quick Assistance Image" />
                </div>
            </section>
            <section className='flex sm:flex-col sm:gap-5 mt-20 w-[70%] md-2:w-[90%] mx-auto justify-between'>
                <div className='bg-white sm:w-full w-[40%] sm:hidden md-2:w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[460px] sm:h-[300px]' src={img3} alt="Quick Assistance Image" />
                </div>
                <div className='w-[50%] sm:w-full md-2:w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl sm:text-xl'>Certified Service providers</h2>
                    <div className='bg-white w-[40%] hidden mt-6 sm:w-full md-2:w-[50%] sm:flex justify-center items-center pt-10 rounded-xl'>
                        <img className='h-[460px] sm:h-[300px]' src={img3} alt="Quick Assistance Image" />
                    </div>
                    <p className='text-[#000000b3] mt-4 sm:mt-6 font-normal sm:text-sm'>Connect with a network of certified and trusted service providers who have been thoroughly vetted to ensure they deliver reliable and professional assistance, giving you confidence in the quality of service you receive.</p>
                </div>
            </section>
            <section className='flex sm:flex-col sm:gap-5 mt-20 mb-20 w-[70%] md-2:w-[90%] mx-auto justify-between'>

                <div className='w-[50%] sm:w-full md-2:w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl sm:text-xl'>Secure payments</h2>
                    <div className='bg-white w-[40%] hidden mt-6 sm:w-full md-2:w-[50%] sm:flex justify-center items-center pt-10 rounded-xl'>
                        <img className='h-[460px] sm:h-[300px]' src={img4} alt="Quick Assistance Image" />
                    </div>
                    <p className='text-[#000000b3] mt-4 sm:mt-6 font-normal sm:text-sm'>Complete your transactions with ease and security through multiple payment options, including credit and debit cards, as well as digital wallets like Apple Pay and Google Pay, ensuring your financial information is protected.</p>
                </div>
                <div className='bg-white sm:hidden sm:w-full w-[40%] md-2:w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[460px] sm:h-[300px]' src={img4} alt="Quick Assistance Image" />
                </div>
            </section>
        </section>
    )
}

export default Features