import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import SPHero from './SPHero'
import SPBenefits from './SPBenefits'
import How from './How'
import Support from './Support'
import SPBanner from './SPBanner'
import img from "../../Assets/iPhone 15 Pro Portrait Mockup (2).png"


const ServiceProvider = () => {
  const data = [
    {
        title: "What types of services can I offer?",
        des: "You can offer various roadside assistance services such as towing, tire changes,jump-starts, lockout services, and fuel delivery. Make sure to specify the services you provide in your profile."
    },
    {
        title: "How will I receive job notifications?",
        des: "You will receive job notifications directly through the app based on your location and availability. You can review the job details and choose to accept or decline the request."

    },
    {
        title: "How does the payment process work?",
        des: "Payments are processed through the app once the job is completed and confirmed by the customer. You will receive secure and timely payments directly to your designated account."
    },
    {
        title: "Can I set my own hours and availability?",
        des: "Yes, you have full control over your schedule. You can set your availability and choose when you want to accept job requests, allowing you to work at your convenience."
    },
    {
        title: "What should I do if I encounter an issue during a job?",
        des: "If you encounter any issues while providing service, you can contact our support team directly through the app. We are available 24/7 to assist with any problems or emergencies."
    }
]
  return (
    <section className='bg-[#F8F8FF] w-full pt-7 h-full'>
    <Nav />
    <SPHero />
    <SPBenefits />
    <How />
    <Support data={data} />
    <SPBanner img={img} />
  
    <Footer />
    </section>
  )
}

export default ServiceProvider