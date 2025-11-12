import React from "react";
import Header from "../components/ServicesComponents/Header.jsx";
import ImageSlider from "../components/ServicesComponents/ImageSlider.jsx";
import TrustedBy from "../components/ServicesComponents/TrustedBy.jsx";
import ServicesAccordion from "../components/ServicesComponents/ServicesAccordion.jsx";
import TestimonialSection from "../components/ServicesComponents/TestimonialSection.jsx";
import IndustryExpertiseSection from "../components/ServicesComponents/IndustryExpertService.jsx";
import SKSFooter from "../components/SKSFooter.jsx";

function Services() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <TrustedBy />
      <ServicesAccordion />
      <TestimonialSection />
      <IndustryExpertiseSection />
      <SKSFooter />
    </div>
  );
}

export default Services;
