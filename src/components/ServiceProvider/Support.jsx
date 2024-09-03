import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Support = () => {
    const data = [
        {
            title: "What types of services are available?",
            des: "We offer a wide range of services including towing, tire changes, jump-starts, fuel delivery, and lockout assistance."
        },
        {
            title: "How long will it take for help to arrive?",
            des: "We offer a wide range of services including towing, tire changes, jump-starts, fuel delivery, and lockout assistance."
        },
        {
            title: "Can I pay through the app?",
            des: "Absolutely! You can securely pay for services through the app using a credit card, debit card, or digital wallet like Apple Pay or Google Pay"
        },
        {
            title: "Are your service providers insured?",
            des: 'Yes, all our service providers are fully insured and vetted to ensure high-quality service and your peace of mind.'
        },
        {
            title: "Can I schedule a service in advance?",
            des: "We offer a wide range of services including towing, tire changes, jump-starts, fuel delivery, and lockout assistance."
        }
    ]
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active accordion
    };

    return (
        <div className='w-full my-20'>
            <h2 className='bg-[#6869ff1f] w-fit px-4 py-1 rounded-[20px]  mx-auto'>Support</h2>
            <h2 className='text-center font-medium text-4xl my-2'>FAQs</h2>
            <h2 className='text-center text-[#000000b3] font-normal'>Have a question and don’t see an answer below? Feel free to reach out to <br /> us at <span className='text-[#6869ff]'>contact@breakdownassistance.com</span></h2>
            <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header flex justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
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