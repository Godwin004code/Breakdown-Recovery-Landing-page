import React from 'react'
import img1 from "../../Assets/mockuuups-free-iphone-15-pro-mockup-with-credit-card-in-hand 1q-3 (1).png"
import img2 from "../../Assets/customer support 1q-4.png"
import img3 from "../../Assets/service provider 1q-2.png"
import img4 from "../../Assets/woman-checking-engine-man-changing-tyre 1q-1.png"

const Benefits = () => {
    return (
        <div className='bg-white p-10 mx-10 rounded-2xl  mt-20'>
            <h2 className='bg-[#6869ff1f] w-fit px-4 py-1 rounded-[20px]  mx-auto'>Benefits</h2>
            <h2 className='text-center font-medium text-4xl my-2'>What we do for our customers</h2>
            <h2 className='text-center text-[#000000b3] font-normal'>Explore the range of services we offer</h2>
            <section className='flex mt-20 w-[90%] mx-auto justify-between'>
                <div className='bg-white w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[440px] rounded-xl' src={img4} alt="Quick Assistance Image" />
                </div>
                <div className='w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl'>Quick Assistance</h2>
                    <p className='text-[#000000b3] mt-4 font-normal'>Time is critical when you're stuck on the side of the road. That's why we've built a robust network of service providers who are strategically positioned to reach you quickly. Our app automatically locates the nearest available provider and dispatches them to your location in record time. We know that every minute counts, so our system is optimized to ensure that help is on the way as soon as you make the request. With our rapid response, you can count on getting back on the road without unnecessary delays.</p>
                </div>
            </section>
            <section className='flex mt-20 w-[90%] mx-auto justify-between'>
               
                <div className='w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl'>Reliable service providers</h2>
                    <p className='text-[#000000b3] mt-4 font-normal'>Quality matters, especially when it comes to roadside assistance. We carefully vet all of our service providers to ensure they meet our high standards of professionalism, reliability, and expertise. Whether you need a tow, a tire change, or a battery jump-start, you can trust that the person helping you is skilled and experienced. Our commitment to partnering with only the best providers means that you can always expect top-notch service, delivered by people who care about getting you back on the road safely.</p>
                </div>
                <div className='bg-white w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[440px] rounded-xl' src={img3} alt="Quick Assistance Image" />
                </div>
            </section>
            <section className='flex mt-20 w-[90%] mx-auto justify-between'>
                <div className='bg-white w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[440px] rounded-xl' src={img1} alt="Quick Assistance Image" />
                </div>
                <div className='w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl'>Transparent pricing </h2>
                    <p className='text-[#000000b3] mt-4 font-normal'>We believe in honesty and transparency in every aspect of our service, especially when it comes to pricing. Before you even request assistance, you’ll see a clear breakdown of the costs involved, so you know exactly what to expect. No hidden fees, no surprises—just straightforward pricing that you can trust. We’re committed to making sure you feel confident and informed about the services you’re receiving and the costs associated with them, ensuring that your experience is as stress-free as possible.</p>
                </div>
            </section>
            <section className='flex mt-20 w-[90%] mx-auto justify-between'>
               
                <div className='w-[45%] my-auto'>
                    <h2 className='font-medium text-4xl'>Customer support</h2>
                    <p className='text-[#000000b3] mt-4 font-normal'>Exceptional customer service is at the heart of everything we do. Our dedicated support team is available around the clock to assist with any questions or concerns you might have. Whether you need help navigating the app, have a question about pricing, or encounter an issue during your service, our support team is here to provide quick and effective solutions. We’re committed to ensuring that your experience is smooth and worry-free, from the moment you request assistance to the time you’re back on the road.</p>
                </div>
                <div className='bg-white w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[440px] rounded-xl' src={img2} alt="Quick Assistance Image" />
                </div>
            </section>
        </div>
    )
}

export default Benefits