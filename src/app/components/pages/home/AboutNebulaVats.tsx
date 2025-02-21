import React from 'react'
import Image from 'next/image'
import LearnMore from '../../common/LearnMore'

function AboutNebulaVats() {
  return (
    <>  
     
        <div className="bg-[rgb(215,217,221,0.50)] py-[33px] sm:py-12 lg:py-[80px] relative " id="about">
            <div className="absolute -bottom-0 right-0 max-w-[189px] lg:top-0 lg:max-w-[348px] xl:max-w-[392px]">
                <Image  src={"/assest/img/png/Nebula__Stringent-1st.png"} width={611} height={392} alt="img"/>
            </div>
            <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto z-1 relative">
                <div className="flex gap-[69px] flex-wrap lg:flex-nowrap justify-between items-center">
                    <div className="lg:min-w-[400px] max-w-[591px] mx-auto lg:mx-0">
                        <Image  src={"/assest/img/png/catdog-1st-img.png"} width={591} height={550} alt="cat-dog"/>
                    </div>
                    <div className="text-[#494336] max-w-[639px]">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl">
                            About Nebula Vets ?
                        </h2>
                        <p className="!leading-[130%] text-sm sm:text-base lg:text-lg  md:mt-6 mt-[38px]">
                            Founded on a strong set of core values, the story of Nebula Vets
                            began with Daniel Hodnett-Lewis, a visionary veterinary surgeon
                            from England, UK. Fueled by a deep passion for animals and a
                            desire to elevate the standard of care, Daniel embarked on a
                            mission to create a veterinary practice that would revolutionize
                            the way pets are treated and cared for. Here's the story of
                            Nebula Vets:
                        </p>
                        <div className="mt-12 pb-[60px]">
                            <LearnMore/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    
    </>
  )
}

export default AboutNebulaVats