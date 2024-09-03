import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import BottomBanner from '../Global/BottomBanner'
import img from "../../Assets/smiling-afro-american-man-prays-fullfilment-his-wish-crosses-fingers-wishes-good-luck 1.png"
import AboutHero from './AboutHero'
import Benefits from './Benefits'

const About = () => {
  return (
    <section className='bg-[#F8F8FF] w-full pt-7 h-full'>
    <Nav />
    <AboutHero />
    <Benefits />
    <BottomBanner img={img} />
    <Footer />
    </section>
  )
}

export default About