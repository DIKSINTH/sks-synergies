import React from "react";
import Header from "../components/ProductsComponents/Header.jsx";
import ProductGrid from "../components/ProductsComponents/ProductGrid.jsx";
import IndustryExpertService from "../components/ProductsComponents/IndustryExpertService.jsx";
import SKSFooter from "../components/SKSFooter.jsx";

function Products() {
  return (
    <div>
      <Header />
      <ProductGrid />
      <IndustryExpertService />
      <SKSFooter />
    </div>
  );
}

export default Products;
