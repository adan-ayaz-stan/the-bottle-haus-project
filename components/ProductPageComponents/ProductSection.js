import { useRecoilState } from "recoil";
import Image from "next/image";
import React, { useState } from "react";

import { shoppingCart } from "../../atoms/shopping-cart";

import { FaShoppingCart } from "react-icons/fa/index";

import { Rating } from "@mui/material";

import sampleImage from "../../cms/images-slider/image-06.jpg";

import styles from "../../styles/ProductPageComponents/ProductSection/main.module.css";

function ProductSection({ product }) {
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

  const newPrice = +product.price.new;
  const oldPrice = +product.price.old;

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

  function addToCart() {
    const oldCart = shoppingCartValue;
    const newItem = [];
    for (let i = 0; i < totalValue; i++) {
      newItem.push({
        name: product.name,
        price: newPrice,
        img: product.img,
      });
    }
    setShoppingCart(oldCart.concat(newItem));
    setTotalValue(1);
  }

  return (
    <div className={styles.main}>
      <div className={styles.product_image}>
        <Image
          src={product.img}
          alt="product-image"
          layout="fill"
          placeholder="blur"
          blurDataURL={
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          }
        />
      </div>
      <div className={styles.product_details}>
        <label className={styles.company_label}>The Bottle Haus</label>
        <h2 className={styles.product_heading}>{product.name}</h2>
        <div className={styles.cremention_and_price}>
          <div className={styles.cremention_box}>
            <p onClick={decrementValue}>-</p>
            <p>{totalValue}</p>
            <p onClick={incrementValue}>+</p>
          </div>
          <div className={styles.price_box}>
            <p>${+(totalValue * newPrice).toFixed(2)}</p>
            <p>${+(totalValue * oldPrice).toFixed(2)}</p>
          </div>
        </div>
        <div className={styles.reviews_link}>
          <Rating
            name="read-only"
            value={+product.rating}
            precision={0.5}
            readOnly
          />{" "}
          <a href="/">28 reviews</a>
        </div>
        <div className={styles.product_description}>{product.description}</div>
        <button className={styles.add_to_cart_button} onClick={addToCart}>
          {" "}
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductSection;
