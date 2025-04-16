import React from 'react'
import Nav from '../Components/Nav'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import SectionEight from './SectionEight'
import { FooterWithSocialLinks } from './Footer'
import NewsletterSection from './New'

function Home() {
  return (
    <div className='p-2'>
        <Nav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <NewsletterSection />
        <FooterWithSocialLinks />
    </div>
  )
}

export default Home