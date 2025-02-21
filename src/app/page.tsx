import React from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/pages/home/Hero'
import Footer from './components/common/Footer'
import OurApproach from './components/pages/home/OurApproach'
import OurService from './components/pages/home/OurService'
import OurMission from './components/pages/home/OurMission'
import AboutNebulaVats from './components/pages/home/AboutNebulaVats'
import WhyChooseNb from './components/pages/home/WhyChooseNb'

function page() {
  return (
    < > 
    <Navbar/>
    <Hero/>
    <OurApproach/>
    <WhyChooseNb/>
    <OurService/>
    <AboutNebulaVats/>
    <OurMission/>
    <Footer/>
    </>
  )
}

export default page