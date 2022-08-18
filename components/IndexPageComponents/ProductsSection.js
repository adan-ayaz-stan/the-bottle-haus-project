import React from "react";

import styles from "../../styles/IndexPageComponents/ProductsSectionStyles/main.module.css";
import ProductComponent from "./ProductComponent";

export default function ProductsSection() {
  return (
    <div className={styles.main}>
      <h1>Bottles below $50</h1>
      <div>
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
