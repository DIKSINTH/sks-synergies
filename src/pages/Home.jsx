import React from "react";
import Header from "../components/Header.jsx";
import SustainableFutureSection from "../components/SustainableFutureSection.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import ClientLogosSection from "../components/ClientLogosSection.jsx";
import PlumbingExcellenceSection from "../components/PlumbingExcellenceSection.jsx";
function Home() {
  return (
    <div>
      <Header />
      <SustainableFutureSection />
      <ImageSlider />
      <ClientLogosSection />
      <PlumbingExcellenceSection />
    </div>
  );
}

export default Home;
