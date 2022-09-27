import { Rating } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa/index";

import sampleImage from "../../cms/images-slider/image-06.jpg";

import styles from "../../styles/ProductPageComponents/ProductSection/main.module.css";

function ProductSection() {
  const [totalValue, setTotalValue] = useState(1);

  const incrementValue = () => {
    if (totalValue < 10) {
      setTotalValue(totalValue + 1);
    }
  };
  const decrementValue = () => {
    if (totalValue > 1) {
      setTotalValue(totalValue - 1);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.product_image}>
        <Image src={sampleImage} alt="product-image" layout="fill" />
      </div>
      <div className={styles.product_details}>
        <label className={styles.company_label}>The Bottle Haus</label>
        <h2 className={styles.product_heading}>
          Balcones Brimstone Texas Scrub Oak Smoked Whiskey 750ml
        </h2>
        <div className={styles.cremention_and_price}>
          <div className={styles.cremention_box}>
            <p onClick={decrementValue}>-</p>
            <p>{totalValue}</p>
            <p onClick={incrementValue}>+</p>
          </div>
          <div className={styles.price_box}>
            <p>${(totalValue * 94.99).toFixed(2)}</p>
            <p>${(totalValue * 114.99).toFixed(2)}</p>
          </div>
        </div>
        <div className={styles.reviews_link}>
          <Rating name="read-only" value={3.5} precision={0.5} readOnly />{" "}
          <a href="/">28 reviews</a>
        </div>
        <div className={styles.product_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <button className={styles.add_to_cart_button}>
          {" "}
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductSection;
