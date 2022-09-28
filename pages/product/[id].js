import React from "react";

import Navbar from "../../components/IndexPageComponents/Navbar";
import Navbar2nd from "../../components/IndexPageComponents/Navbar-2nd";
import ProductSection from "../../components/ProductPageComponents/ProductSection";
import ProductReview from "../../components/ProductPageComponents/ProductReview";
import Footer from "../../components/IndexPageComponents/Footer";

import { prisma } from "../../prisma/client";

function ProductPage({ product }) {
  console.log(product);

  return (
    <div>
      <Navbar />
      <Navbar2nd />
      <ProductSection product={product} />
      <ProductReview />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const params = context.params;
  const productId = params.id;

  // Getting the product
  const productData = await prisma.products.findUnique({
    where: {
      id: productId,
    },
  });

  return {
    props: {
      product: productData,
    },
  };
}

export default ProductPage;
