import React from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";

import { shoppingCart } from "../../atoms/shopping-cart";

import styles from "../../styles/IndexPageComponents/RareAndHardToFindStyles/main.module.css";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";
import sampleImageMain from "../../cms/rare-to-find-images/sample-image-main.png";

export default function RareAndHardToFindSection({ RATHFproducts }) {
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

  return (
    <div className={styles.main}>
      <h1>RARE & HARD TO FIND</h1>
      <div className={styles.topSection}>
        <div className={styles.teamComment}>
          <hr />
          <p>
            The Bottle Haus's team of connoisseurs have done all the hard work
            for you.
          </p>
        </div>

        <div className={styles.mainProductImage}>
          <Image src={sampleImageMain} layout="fill"></Image>
        </div>
        <div className={styles.mainProductLabel}>
          <h3>Louis WarmWind's Special</h3>
          <hr />
          <p>The oldest being over a 100 years old..</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.productListing}>
          {RATHFproducts.map((ele, ind) => {
            function addToCart() {
              const oldCart = shoppingCartValue;
              const newItem = [
                {
                  name: ele.name,
                  price: ele.price.new,
                },
              ];
              setShoppingCart(oldCart.concat(newItem));
            }

            return (
              <div className={styles.product} key={ind + Math.random() * ind}>
                <div onClick={addToCart} className={styles.add_to_cart_icon}>
                  <Image src={plusIcon} layout="fill"></Image>
                </div>

                <a
                  href={`/product/${ele.id}`}
                  alt="product-page-link"
                  className={styles.product_image}
                >
                  <Image src={sampleImage} layout="fill"></Image>
                </a>

                <div className={styles.product_details}>
                  <a
                    href={`/product/${ele.id}`}
                    alt="product-page-link"
                    className={styles.product_name}
                  >
                    {ele.name}
                  </a>
                  <div className={styles.product_price}>
                    <p>${ele.price.new}</p>
                    <p>${ele.price.old}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.comment}>
          <span>I TOLD</span>
          <span>MY WIFE</span>
          <span>IT'S AN</span>
          <span>INVESTMENT</span>
        </div>
      </div>
    </div>
  );
}
