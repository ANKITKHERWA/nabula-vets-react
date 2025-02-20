import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PreventiveCare() {
  return (
    <>
    
    <div
                        className="bg-[#494336] flex flex-col justify-start  sm:pl-5 sm:pt-[25px] pt-3 pl-3 sm:pr-4 pr-3 xl:w-[22%] sm:w-[40%] w-[60%] h-[419px]">
                        <div className="max-w-[93px]">
                            <Image  src={"/assest/img/svg/injection.svg"} width={93} height={74} alt="img"/>
                        </div>
                        <div className="text-[#D7D9DD]">
                            <h4 className="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[32px] xxl:text-4xl pt-6 sm:pt-7 md:pt-10 lg:pt-[50px]">
                                Preventive Care
                            </h4>
                            <Link href={"/animal-health-check.html"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Animal Health Check
                            </Link>
                            <Link href={"/vaccinations.html"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Vaccinations
                            </Link>
                            <Link href={"/dantel-care.html"}
                                className="text-sm sm:text-base block lg:text-lg mt-1.5 underline text-start">
                                Dental
                            </Link>
                        </div>
                    </div> 
    
    </>
  )
}

export default PreventiveCare