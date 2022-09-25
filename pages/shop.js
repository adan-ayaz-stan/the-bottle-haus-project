import React from "react";

import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import Footer from "../components/IndexPageComponents/Footer";

import styles from "../styles/shop.module.css";
import SideMenu from "../components/ShopPageComponents/SideMenu";
import ShoppingWindow from "../components/ShopPageComponents/ShoppingWindow";

function Shop({ query }) {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f6f5f7" }}>
        <Navbar2nd />
      </div>
      <div className={styles.submain}>
        <SideMenu query={query} />
        <ShoppingWindow query={query} />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;

export async function getServerSideProps(context) {
  const query = context.query;
  return {
    props: {
      query,
    },
  };
}
