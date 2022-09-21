import React from "react";

import styles from "../../styles/ShopPageComponents/ShoppingWindow/main.module.css";

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
          <div className={styles.filter_box}>Price</div>
          <div className={styles.filter_box}>Brand</div>
          <div className={styles.filter_box}>Sort By</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingWindow;
