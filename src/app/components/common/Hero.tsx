import Image from 'next/image'
import React from 'react'
import BookNow from './BookNow'

function Hero() {
  return (
    <>
     <div className="bg-[#494336] relative">
            <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
                <div className="justify-between pt-[170px] sm:pb-[80px] pb[0px] sm:flex flex-wrp">
                    <div className="lg:pl-[100px] xl:pl-[136px] relative z-1">
                        <h1
                            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] xl:text-[70px] font-regular sm:mt-0 text-[#D7D9DD] leading-[104%] max-w-[230px] sm:max-w-full">
                            Veterinary Services</h1>
                        <p
                            className="text-[#D7D9DD] mt-7 sm:mt-5 lg:mt-[28px] text-base lg:text-lg xl:text-xl max-w-[660px]">
                            At Nebula Vets, we take pride in offering an extensive range of services to meet the diverse
                            needs of our patients. Our commitment to comprehensive care ensures that we can provide the
                            highest quality veterinary services under one roof.</p>
                        <div className="mt-[38px]">
                           <BookNow/>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 sm:block hidden sm:max-w-[500px] xl:max-w-full">
                        <Image src={"/assest/img/png/nebula-dog+cat.png"} width={653} height={426} alt="dog-cat-img"/>
                    </div>
                    <div className="sm:hidden">
                        <Image src={"/assest/img/png/hero-cat+dog-right.png"} width={362} height={252} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Hero