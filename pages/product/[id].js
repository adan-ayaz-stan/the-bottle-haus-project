import React from "react";

import Navbar from "../../components/IndexPageComponents/Navbar";
import Navbar2nd from "../../components/IndexPageComponents/Navbar-2nd";
import ProductSection from "../../components/ProductPageComponents/ProductSection";
import ProductReview from "../../components/ProductPageComponents/ProductReview";
import Footer from "../../components/IndexPageComponents/Footer";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <Navbar2nd />
      <ProductSection />
      <ProductReview />
      <Footer />
    </div>
  );
}

export default ProductPage;
