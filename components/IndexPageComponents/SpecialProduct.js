import Image from "next/image";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { GrCart } from "react-icons/gr";

import { shoppingCart } from "../../atoms/shopping-cart";

import styles from "../../styles/IndexPageComponents/SpecialProduct/main.module.css";

function SpecialProduct() {
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

  const [totalValue, setTotalValue] = useState(1);

  const incrementValue = () => {
    if (totalValue < 3) {
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
        <Image
          src={
            "https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80"
          }
          alt="special-product-image"
          height={660}
          width={500}
        />
      </div>
      <div className={styles.product_info}>
        <div className={styles.product_info__name}>
          <p>The Bottle Haus</p>
          <h2>Alberta Sauvicnon Blanc Rye Canadian Whiskey 750ml</h2>
        </div>
        <div className={styles.product_info__buy_section}>
          <div className={styles.product_info__items_crementer}>
            <button onClick={decrementValue}>-</button>
            <p>{totalValue}</p>
            <button onClick={incrementValue}>+</button>
          </div>
          <div className={styles.product_info__price_info}>
            <p>$89.95</p>
            <p>$129.55</p>
          </div>
        </div>
        <div className={styles.product_info__review_box}>
          <div className={styles.product_info__rating}>
            <span className={styles.checked}></span>
            <span className={styles.checked}></span>
            <span className={styles.checked}></span>
            <span className={styles.checked}></span>
            <span></span>
          </div>
          <a href="/">28 Reviews</a>
        </div>
        <div className={styles.product_info__description}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </div>
        <div className={styles.product_info__add_to_cart}>
          <button
            onClick={() => {
              function addToCart() {
                const oldCart = shoppingCartValue;
                const newItem = [];
                for (let i = 0; i < totalValue; i++) {
                  newItem.push({
                    name: "Alberta Sauvicnon Blanc Rye Canadian Whiskey 750ml",
                    price: 89.95,
                    img: "https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80",
                  });
                }
                setShoppingCart(oldCart.concat(newItem));
                setTotalValue(1);
              }
              addToCart();
            }}
          >
            <GrCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
