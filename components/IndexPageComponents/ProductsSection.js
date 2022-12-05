import React from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";

import { shoppingCart } from "../../atoms/shopping-cart";

import styles from "../../styles/IndexPageComponents/ProductsSectionStyles/main.module.css";

export default function ProductsSection({ products }) {
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

  return (
    <div className={styles.main}>
      <h1>Bottles below $50</h1>
      <div className={styles.product_listing}>
        {products.map((ele, ind) => {
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
                <Image
                  src={ele.img}
                  layout="fill"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
                ></Image>
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
    </div>
  );
}
