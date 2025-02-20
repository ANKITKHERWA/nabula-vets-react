import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LearnMore from '../common/LearnMore'
import Card1 from './PreventiveCare'
import PreventiveCare from './PreventiveCare'
import SickPatientCare from './SickPatientCare'
import Surgery from './Surgery'
import AdditionalServices from './AdditionalServices'

function OurService() {
  return (
    <>
     
        <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto bg-[#fff] pb-[140px]" id="services">
            <div className="sm:px-[50px] lg:px-[100px] xl:px-[136px] py-[60px] md:py-[70px] xl:py-20">
                <div className="text-[#494336] max-w-[770px]">
                    <h4 className="text-2xl sm:text-3xl lg:text-5xl leading-[130%]">
                        Our Services
                    </h4>
                    <p className="leading-[157.143%] md:!leading-[130%] mt-7 text-sm sm:text-base md:text-lg lg:text-xl">
                        We are proud to offer a comprehensive range of exceptional
                        clinical services to cater to all your pet's needs. From routine
                        wellness health checks to prompt and efficient urgent care, our
                        team is here to provide the highest level of support and
                        assistance. Count on us to be there for you and your beloved
                        companion every step of the way.
                    </p>
                    <div className="mt-12">
                        <LearnMore/>
                    </div>
                </div>
            </div>
            <div className="justify-center flex flex-wrap items-center sm:gap-10 gap-20">
                 <PreventiveCare/>
                 <SickPatientCare/>
                 <Surgery/>       
                 <AdditionalServices/>                   
            </div>
        </div> 
    
    
    
    </>
  )
}

export default OurService