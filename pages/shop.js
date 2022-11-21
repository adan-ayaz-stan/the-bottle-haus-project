import React from "react";

import dbclient from "../prisma/client";

import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import Footer from "../components/IndexPageComponents/Footer";

import styles from "../styles/shop.module.css";
import SideMenu from "../components/ShopPageComponents/SideMenu";
import ShoppingWindow from "../components/ShopPageComponents/ShoppingWindow";
import { useRecoilValue } from "recoil";
import { priceFilterAtom } from "../atoms/shop-page";

function Shop({ query, brands, categories }) {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f6f5f7" }}>
        <Navbar2nd />
      </div>
      <div className={styles.submain}>
        <SideMenu query={query} categories={categories} />
        <ShoppingWindow query={query} brands={brands} categories={categories} />
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
    const brands = await dbclient.brands.findMany({});

    // Fetching categories
    const categories = await dbclient.category.findMany({});

    return {
      props: {
        query,
        brands,
        categories,
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
        error: {
          ...e,
        },
      },
    };
  }
}
