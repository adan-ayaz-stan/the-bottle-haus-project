import React from "react";
import dbclient from "../../prisma/client";

import Navbar from "../../components/IndexPageComponents/Navbar";
import Navbar2nd from "../../components/IndexPageComponents/Navbar-2nd";
import ProductSection from "../../components/ProductPageComponents/ProductSection";
import ProductReview from "../../components/ProductPageComponents/ProductReview";
import Footer from "../../components/IndexPageComponents/Footer";

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
  const productData = await dbclient.products.findUnique({
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
