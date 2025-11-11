import React from "react";
import Header from "../components/AboutUsComponents/Header.jsx";
import ImageSlider from "../components/AboutUsComponents/ImageSlider.jsx";
import CompanyShowcase from "../components/AboutUsComponents/CompanyShowcase.jsx";
import TrustedBrands from "../components/AboutUsComponents/TrustedBrands.jsx";
import IndustrySegments from "../components/AboutUsComponents/IndustrySegments.jsx";
import TestimonialSection from "../components/AboutUsComponents/TestimonialSection.jsx";
import IndustryExpertService from "../components/AboutUsComponents/IndustryExpertService.jsx";
import SKSFooter from "../components/SKSFooter.jsx";

function AboutUs() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <CompanyShowcase />
      <TrustedBrands />
      <IndustrySegments />
      <TestimonialSection />
      <IndustryExpertService />
      <SKSFooter />
    </div>
  );
}

export default AboutUs;
