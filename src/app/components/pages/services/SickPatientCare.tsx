import Image from "next/image";
import React from "react";
import BookNow from "../../common/BookNow";
import AnimalHealth from "../../common/AnimalHealth";

function SickPatientCare() {
  return (
    <>
      <div className="md:flex flex-wrp justify-between" id="sik">
        <div className="mt-[80px] px-10 lg:w-2/5 w-full">
          <div className="max-w-[376px] sm:mb-[0px] -mb-[120px]">
            <Image
              src={"/assest/img/png/sick-patient-icon.png"}
              width={359}
              height={359}
              alt="img"
            />{" "}
          </div>
          <h2 className="xl:text-5xl md:text-[40px] text-[32px] text-[#494336] mt-[80px]">
            Sick Patient Care
          </h2>
          <p className="text-[#494336] xl:text-2xl sm:text-xl text-base max-w-full mt-6 md:max-w-[478px] leading-[150%] Roboto-font">
            Delivering exceptional care for sick patients, combining the virtues
            of efficiency and expertise
          </p>
          <p className="text-[#494336] xl:text-xl sm:text-lg text-sm mt-[40px] max-w-full md:max-w-[481px] leading-[130%]">
            At Nebula Vets, we are fully equipped with advanced diagnostic tools
            and a wide range of treatment options to address any health issue
            your pet may be facing. Our commitment to comprehensive care means
            that we have the expertise and resources to provide accurate
            diagnoses and effective treatments.
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SickPatientCare;
