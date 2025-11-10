import React from "react";
import Header from "../components/Header.jsx";
import SustainableFutureSection from "../components/SustainableFutureSection.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import ClientLogosSection from "../components/ClientLogosSection.jsx";
import PlumbingExcellenceSection from "../components/PlumbingExcellenceSection.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import ServicesHeader from "../components/ServicesHeader.jsx";
import ServicesAccordion from "../components/ServicesAccordion.jsx";
import IndustrySegments from "../components/IndustrySegments.jsx";
import TestimonialSection from "../components/TestimonialSection.jsx";
import IndustryExpertService from "../components/IndustryExpertService.jsx";
import SKSFooter from "../components/SKSFooter.jsx";

function Home() {
  return (
    <div>
      <Header />
      <SustainableFutureSection />
      <ImageSlider />
      <ClientLogosSection />
      <PlumbingExcellenceSection />
      <ProductsSection />
      <ServicesHeader />
      <ServicesAccordion />
      <IndustrySegments />
      <TestimonialSection />
      <IndustryExpertService />
      <SKSFooter />
    </div>
  );
}

export default Home;
