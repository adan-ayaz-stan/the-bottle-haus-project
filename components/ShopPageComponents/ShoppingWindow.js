import React from "react";

import ProductComponent from "../IndexPageComponents/ProductComponent";

import styles from "../../styles/ShopPageComponents/ShoppingWindow/main.module.css";
import PriceFilter from "./FiltersForShoppingWindow/PriceFilter";
import BrandFilter from "./FiltersForShoppingWindow/BrandFilter";
import SortbyFilter from "./FiltersForShoppingWindow/SortbyFilter";

function ShoppingWindow({ query }) {
  const categories = [
    {
      name: "Whiskey",
      type: "whiskey",
    },
    {
      name: "Tequila",
      type: "tequila",
    },
    {
      name: "Vodka",
      type: "vodka",
    },
    {
      name: "Gin",
      type: "gin",
    },
    {
      name: "Cognac & Brandy",
      type: "cognacandbrandy",
    },
    {
      name: "Rum",
      type: "rum",
    },
    {
      name: "Liquor",
      type: "liqour",
    },
    {
      name: "Champagne",
      type: "champagne",
    },
    {
      name: "Wine",
      type: "wine",
    },
  ];

  return (
    <div className={styles.main}>
      {/* TOPBAR */}
      <div className={styles.topbar}>
        <h2>
          {categories.map((ele) => {
            if (ele.type == query.category) {
              return ele.name;
            } else {
              return;
            }
          })}
        </h2>
        <div className={styles.filters_container}>
          <PriceFilter query={query} />
          <BrandFilter query={query} />
          <SortbyFilter query={query} />
        </div>
      </div>
      {/* PRODUCTS LISTING */}
      <div className={styles.product_listing}>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>
    </div>
  );
}

export default ShoppingWindow;
