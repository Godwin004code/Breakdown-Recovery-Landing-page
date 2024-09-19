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
  return (
    <section className='bg-[#F8F8FF] w-full pt-7 h-full'>
    <Nav />
    <SPHero />
    <SPBenefits />
    <How />
    <Support />
    <SPBanner img={img} />
  
    <Footer />
    </section>
  )
}

export default ServiceProvider