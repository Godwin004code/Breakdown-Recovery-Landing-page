import React from 'react'

const ContactForm = () => {
  return (
    <form className='bg-[#fff] w-[80%] sm:w-[90%] mx-auto py-16 sm:py-10 px-14 sm:px-3'>
        <div>
            <h2 className='text-center font-medium sm:text-xl text-4xl'>Get in touch</h2>
            <p className='text-center mb-16 text-[#000000b3] sm:text-sm font-normal'>Fill out the form below, and our team will get back to you as soon as possible.</p>
        </div>
    <div className='w-full flex gap-4 md:flex-col justify-between mb-12 sm:mb-[16px]'>
      <input type="text"  style={{border: '1px solid #0000004d'}} className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='First Name' />
      <input type="text" style={{border: '1px solid #0000004d'}}  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Last Name' />
    </div>
    <div className='w-full flex gap-4 md:flex-col justify-between sm:mb-[16px] mb-12'>
      <input type="email"  style={{border: '1px solid #0000004d'}} className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Email' />
      <input type="number"  style={{border: '1px solid #0000004d'}}  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Phone Number' />
    </div>
    <div className='w-full flex justify-between mb-12 sm:mb-[16px]'>
     
      <select  style={{border: '1px solid #0000004d'}} className='category-select pl-6 w-full h-[60px] rounded-[10px] pr-6 bg-[#FFFFFF] focus:outline-none' name="category" id="category">
        <option value="Category" className='pl-6'>Category</option>
      
      </select>
    </div>
    <div>
      <textarea  style={{border: '1px solid #0000004d'}} className='w-full pl-6 pt-5 pb-32 rounded-[10px] focus:outline-none' placeholder='Your Text'></textarea>
    </div>
    <button className='bg-[#6869ff] rounded-[10px] text-white w-full h-[80px] mt-12 sm:mt-[22px]'>Submit</button>
  </form>
  )
}

export default ContactForm