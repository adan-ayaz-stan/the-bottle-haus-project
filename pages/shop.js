import React from "react";

import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import Footer from "../components/IndexPageComponents/Footer";

import styles from "../styles/shop.module.css";
import SideMenu from "../components/ShopPageComponents/SideMenu";
import ShoppingWindow from "../components/ShopPageComponents/ShoppingWindow";

import { prisma } from "../prisma/client";

function Shop({ query, brands, categories, products}) {

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f6f5f7" }}>
        <Navbar2nd />
      </div>
      <div className={styles.submain}>
        <SideMenu query={query} categories={categories} />
        <ShoppingWindow
          query={query}
          brands={brands}
          products={products}
          categories={categories}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;

export async function getServerSideProps(context) {
  try {
    const query = context.query;

    // Fetching brands
    const brands = await prisma.brands.findMany({});

    // Fetching categories
    const categories = await prisma.category.findMany({});

    // Fetching all products
    const products = await prisma.products.findMany({});

    return {
      props: {
        query,
        brands,
        categories,
        products,
      },
    };
  } catch (e) {
    console.log(e);
    const query = context.query;
    return {
      props: {
        query,
        brands: [],
        categories: [],
        products: [],
        error: {
          ...e,
        },
      },
    };
  }
}