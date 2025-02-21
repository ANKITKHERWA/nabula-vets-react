 
import Image from 'next/image'

import React from 'react'
import BookNow from '../../common/BookNow'



export default function Hero() {
  return (
    <> 
    
        <div
            className="sm:bg-[url('/assest/img/png/hero-img.png')] bg-no-repeat bg-cover bg-[100%]  mt-24 sm:pt-[170px] sm:pb-[85px] relative overflow-hidden bg-[#D7D9DD]">
            <div className="max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
                <div className="max-w-[551px] lg:pl-[100px] xl:pl-[136px] relative z-1 pt-9">
                    <h1
                        className="sm:max-w-[511px] max-w-[230px] text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xxl:text-[70px] font-normal sm:mt-0 sm:text-[#D7D9DD] leading-[104%]">
                        Welcome to Nebula Vets</h1>
                    <p
                        className="sm:text-[#D7D9DD] mt-5 sm:mt-7 text-base sm:txt-lg md:text-xl lg:text-2xl xl:text-[28px] Roboto-font">
                        Reinventing Pet Medicine</p>
                    <div className="mt-[38px]">
                       <BookNow/>
                    </div>
                </div>
                <div
                    className="mt-6 mb-3 absolute -right-20 sm:top-0 top-28  sm:max-w-[360px] max-w-[265px] md:max-w-full">
                    <Image src={"/assest/img/png/hero-img-absulate-1.png"} width={482} height={536} alt='img'/>
                </div>
            </div>
            <div className="sm:hidden mt-14">
            <Image src={"/assest/img/png/Hero-img-small.png"} width={676} height={278} alt='img'/>
            </div>
        </div>
    
    

    </ >
  )
}
