import Image from "next/image";
import React from "react";
import BookNow from "../../common/BookNow";
import AnimalHealth from "../../common/AnimalHealth";
import SickPatientCare from "./SickPatientCare";
import SurgeryCare from "./SurgeryCare";
import AdditionalServices from "./AdditionalServices";

function PreventCare() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="md:flex flex-wrp justify-between " id="pre-care">
          <div className="mt-[80px] px-10 lg:w-2/5 w-full">
            <div className="max-w-[376px] sm:mb-[0px] -mb-[40px]">
              <Image
                src={"/assest/img/png/Preventive-care-big.png"}
                width={376}
                height={304}
                alt="img"
              />
            </div>
            <h2 className="xl:text-5xl md:text-[40px] text-[32px] text-[#494336]">
              Preventive Care
            </h2>
            <p className="text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full lg:max-w-[518px] leading-[150%] Roboto-font mt-6">
              Your pet's well-being at the forefront of our practice.
            </p>
            <p className="text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full lg:max-w-[481px] leading-[130%]">
              At Nebula Vets, we take a proactive approach to your pet's
              healthcare, prioritizing their well-being and aiming to maximize
              their quality of life. We believe in the importance of preventive
              medicine and early detection of potential health issues. By
              implementing regular wellness check-ups and comprehensive
              screenings, we can identify and address any problems at their
              earliest stages.
            </p>
            <p className="mt-[40px] md:block hidden">
              <BookNow />
            </p>
          </div>
          <div className="bg-[rgb(215,217,221,0.50)] md:mt-[0px] mt-[60px] lg:w-3/5 w-full">
            <div>
              <AnimalHealth />
              <AnimalHealth />
              <AnimalHealth />
              <AnimalHealth />
            </div>
          </div>
        </div>
        <div>
          <SickPatientCare />
        </div>
        <div>
          <SurgeryCare />
        </div>
        <div>
          <AdditionalServices />
        </div>
      </div>
    </>
  );
}

export default PreventCare;
