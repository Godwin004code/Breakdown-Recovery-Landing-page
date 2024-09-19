import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import PartnersHero from './PartnersHero'
import PartnerBanner from './PartnerBanner'
import PartnerBenefit from './PartnerBenefit'

const Partners = () => {
  return (
    <div className='bg-[#F8F8FF] w-full pt-7 h-full'>
      <Nav />
      <PartnersHero />
      <PartnerBenefit />
      <PartnerBanner />
      
      <Footer />
    </div>
  )
}

export default Partners
