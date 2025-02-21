import Image from "next/image";
import React from "react";
import BookNow from "../../common/BookNow";
import AnimalHealth from "../../common/AnimalHealth";

function SurgeryCare() {
  return (
    <>
      <div className="md:flex flex-wrp justify-between" id="surgery">
        <div className="md:-mt-[80px] mt-[120px] px-10 md:w-2/5 w-full">
          <div className="max-w-[376px] md:mb-0 -mb-[140px]">
            <Image
              src={"/assest/img/png/Surgery-icon.png"}
              width={350}
              height={346}
              alt="img"
            />
          </div>
          <h2 className="xl:text-5xl md:text-[40px] text-[32px] text-[#494336] mt-[90px]">
            Surgery
          </h2>
          <p className="text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full mt-6 md:max-w-[518px] leading-[150%] Roboto-font">
            Highly experienced surgeons -dedicated to delivering outstanding
            care for your pet.
          </p>
          <p className="text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[500px] leading-[130%]">
            At Nebula Vets, we are equipped to handle a wide range of veterinary
            services, from emergency surgeries to routine procedures like
            neuters. Our team of skilled veterinarians is committed to providing
            the highest level of care to your pets.
          </p>
          <p className="mt-[40px] md:block hidden">
            <BookNow />
          </p>
        </div>
        <div className="bg-[rgb(215,217,221,0.50)] md:mt-[0px] mt-[60px] lg:w-3/5 w-full">
          <div>
            <AnimalHealth />
            <AnimalHealth />
          </div>
        </div>
      </div>
    </>
  );
}

export default SurgeryCare;
