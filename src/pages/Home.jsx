import React from "react";
import Header from "../components/HomeComponents/Header.jsx";
import ImageSlider from "../components/HomeComponents/ImageSlider.jsx";
import ClientLogosSection from "../components/HomeComponents/ClientLogosSection.jsx";
import PlumbingExcellenceSection from "../components/HomeComponents/PlumbingExcellenceSection.jsx";
import ProductsSection from "../components/HomeComponents/ProductsSection.jsx";
import ServicesHeader from "../components/HomeComponents/ServicesHeader.jsx";
import ServicesAccordion from "../components/HomeComponents/ServicesAccordion.jsx";
import IndustrySegments from "../components/HomeComponents/IndustrySegments.jsx";
import TestimonialSection from "../components/HomeComponents/TestimonialSection.jsx";
import IndustryExpertService from "../components/HomeComponents/IndustryExpertService.jsx";
import SKSFooter from "../components/SKSFooter.jsx";

function Home() {
  return (
    <div>
      <Header />
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
