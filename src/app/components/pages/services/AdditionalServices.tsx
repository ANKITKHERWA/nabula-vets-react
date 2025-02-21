import Image from "next/image";
import React from "react";
import BookNow from "../../common/BookNow";
import AnimalHealth from "../../common/AnimalHealth";

function AdditionalServices() {
  return (
    <>
      <div className="md:flex flex-wrp justify-between">
        <div className="mt-[80px] px-10 md:w-2/5 w-full">
          <div className="max-w-[376px] md:mb-0 -mb-[100px]">
            <Image
              src={"/assest/img/png/Additional-icon.png"}
              width={367}
              height={309}
              alt="img"
            />
          </div>
          <h2 className="xl:text-5xl md:text-[40px] text-[32px] text-[#494336] mt-[45px]">
            Additional Services
          </h2>
          <p className="text-[#494336] xl:text-2xl sm:text-xl text-base md:max-w-[518px] max-w-full Roboto-font leading-[150%] mt-6">
            Additional Services that Go Above and Beyond: Experience Exceptional
            Veterinary Care at Nebula Vets
          </p>
          <p className="text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] md:max-w-[481px] max-w-full leading-[130%]">
            Experience comprehensive veterinary care at Nebula Vets. We offer
            specialized services in travel document assistance, skin
            dermatology, microchipping, and compassionate euthanasia. Trust our
            experienced team for exceptional care tailored to your pet's unique
            needs.
          </p>
          <p className="mt-[102px] md:block hidden">
            <BookNow />
          </p>
        </div>
        <div className="bg-[rgb(215,217,221,0.50)] md:mt-[0px] mt-[60px] lg:w-3/5 w-full">
          <div className="pb-20">
            <AnimalHealth />
            <AnimalHealth />
            <AnimalHealth />
            <AnimalHealth />
            <AnimalHealth />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdditionalServices;
