import React from 'react'
import img from "../../Assets/Vector (1).png"

const ContactHero = () => {
    return (
        <section className='mt-10 relative'>
            <img src={img} className=' w-full ' alt="happy driver" />
            <section className=' pb-20 pl-10 gap-4 absolute top-0 flex justify-center items-center flex-col w-full h-full'>

                <h2 className='font-medium text-5xl text-black '>Contact us</h2>
                <p className='text-[#000000b3]'>We’re here to help and answer any questions you might have.</p>
            </section>
        </section>
    )
}

export default ContactHero