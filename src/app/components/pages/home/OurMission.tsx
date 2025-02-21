import Image from 'next/image'
import React from 'react'
import BookNow from '../../common/BookNow'


function OurMission() {
  return (
    <>
    
    <div className="bg-[#494336] relative border-b-[2px] border-solid border-[#D8DADC] max-lg:pb-[142px]">
            <div
                className="absolute right-0 min-md:right-[37px] max-sm:max-w-[288px] !max-lg lg:max-w-[350px]:xl:max-w-[400px] !max-xl:max-w-[500px] bottom-0 ">
                <Image  src={"/assest/img/png/Nebula-Dog+Cat.png"} width={584} height={342} alt="dog-cat-img"/>
            </div>
            <div className="max-w-[1160px] px-8 sm:px-[40px] py-[60px] sm:py-[80px] mx-auto" id="portal">
                <div className="max-w-[568px] z-1 relative">
                    <h4
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl text-[#D7D9DD] mb-[13px] sm:mb-[20px] md:mb-[30px]">
                        Our Mission
                    </h4>
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D7D9DD] !leading-[26px] mb-[38px] sm:mb-10">
                        Our Mission is to establish a new standard of excellence in
                        veterinary care, driven by an unwavering ethical conscience.
                    </p>
                   <div>
                    <BookNow/>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurMission