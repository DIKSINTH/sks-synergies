import React from "react";
import Header from "../components/ProductDetailsComponents/Header.jsx";
import ProductDetail from "../components/ProductDetailsComponents/ProductDetail.jsx";
import ProductShowcase from "../components/ProductDetailsComponents/ProductShowcase.jsx";
import IndustryExpertService from "../components/ProductDetailsComponents/IndustryExpertService.jsx";
import SKSFooter from "../components/SKSFooter.jsx";

function ProductDetails() {
  return (
    <div>
      <Header />
      <ProductDetail />
      <ProductShowcase />
      <IndustryExpertService />
      <SKSFooter />
    </div>
  );
}

export default ProductDetails;
