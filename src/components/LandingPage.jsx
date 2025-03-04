import React from "react";
import LandingBanner from "./LandingBanner";

import Partners from "./Partners";
import WhyPlanet from "./WhyPlanet";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import WhyAttend from "./WhyAttend";

const LandingPage = () => {
  return (
    <>
      <LandingBanner />
      <WhyAttend />

      <Partners />

      <WhyPlanet />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
