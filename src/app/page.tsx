import React from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/home/Hero'
import Footer from './components/common/Footer'
import OurApproach from './components/home/OurApproach'
import Aco1 from './components/home/WhyChooseNb'
import OurService from './components/home/OurService'
import AboutUs from './components/home/AboutNebulaVats'
import OurMission from './components/home/OurMission'
import AboutNebulaVats from './components/home/AboutNebulaVats'
import WhyChooseNb from './components/home/WhyChooseNb'

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