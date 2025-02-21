import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/common/Hero";
import SerSwiper from "../components/pages/services/SerSwiper";
import Care from "../components/pages/services/Care";
import PreventCare from "../components/pages/services/PreventCare";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <SerSwiper />
      <Care />
      <PreventCare />
      <Footer />
    </>
  );
}

export default page;
