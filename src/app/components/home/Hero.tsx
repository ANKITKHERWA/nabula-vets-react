 
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Btn from '../common/Btn'

export default function Hero() {
  return (
    <> 
    
        <div
            className="sm:bg-[url('/assest/img/png/hero-img-1.png')] bg-no-repeat bg-cover bg-[100%] pt-[142px] sm:pt-[282px] sm:pb-[85px] relative overflow-hidden">
            <div className="max-w-[1440px]  max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
                <div className="max-w-[230px] sm:max-w-[551px]  lg:pl-[100px] xl:pl-[136px] relative z-10">
                    <h1
                        className="max-w-[511px] text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xxl:text-[70px] font-regular sm:mt-0 sm:text-[#D7D9DD] leading-[104%]">
                        Welcome to Nebula Vets</h1>
                    <p
                        className="sm:text-[#D7D9DD] mt-2 sm:mt-4 lg:mt-[28px] text-base sm:txt-lg md:text-xl lg:text-2xl xl:text-[28px]">
                        Reinventing Pet Medicine</p>
                    <div className="mt-[38px]">
                       <Btn/>
                    </div>
                </div>
                <div
                    className=" mt-[23px] mb-[10px] absolute -right-20 top-0 ">
                    <Image src={"/assest/img/png/hero-img-absulate-1.png"} width={582} height={500} alt='img'/>
                </div>
            </div>
           
        </div>
    
    

    </ >
  )
}
