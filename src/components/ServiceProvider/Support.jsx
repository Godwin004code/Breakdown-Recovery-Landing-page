import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Support = ({data}) => {
   

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active accordion
    };

    return (

        <div className='w-full my-20'>
            <h2 className='bg-[#6869ff1f] w-fit px-4 py-1 sm:text-sm rounded-[20px]  mx-auto'>Support</h2>
            <h2 className='text-center font-medium text-4xl sm:text-xl my-2'>FAQs</h2>
            <h2 className='text-center sm:w-[80%] sm:mx-auto text-[#000000b3] font-normal'>Have a question and don’t see an answer below? Feel free to reach out to <br /> us at <span className='text-[#6869ff]'>contact@breakdownassistance.com</span></h2>
            <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header flex justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className='sm:text-sm'>{item.title}</h3>
            <div className='my-auto'>
                {activeIndex === index ? <FaChevronUp /> :  <FaChevronDown />}
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? 'open' : ''
            }`}
          >
            <p>{item.des}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
    )
}

export default Support