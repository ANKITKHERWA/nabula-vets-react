import Image from 'next/image'
import React from 'react'

function SerSwiper() {
  return (
    < >
    <div className="bg-[rgb(215,217,221,0.50)]">
    <div className=" max-w-[1440px] max-[360px]:px-4 px-8 md:px-10 xl:px-[50px] mx-auto">
    <div className="justify-between items-center gap-10 flex flex-wrap py-10">
    <div className="max-w-[40%] md:max-w-[20%]">
      <Image src={"/assest/img/png/dog+men.png"} width={420} height={420} 
      alt="dog"
      />
    </div>  
    <div className="max-w-[40%] md:max-w-[20%]">
      <Image src={"/assest/img/png/dog2-img.png"} width={420} height={420} 
      alt="dog"
      />
    </div> 
     <div className="max-w-[40%] md:max-w-[20%]">
      <Image src={"/assest/img/png/catdog-1st-img.png"} width={420} height={420} 
      alt="dog"
      />
    </div> 
     <div className="max-w-[40%] md:max-w-[20%]">
      <Image src={"/assest/img/png/dog+girl.png"} width={420} height={420} 
      alt="dog"
      />
    </div>
    </div>
    </div>
    </div>
     </>
  )
}

export default SerSwiper