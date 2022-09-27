import React, { useEffect } from "react";
import Image from "next/image";

import PriceFilter from "./FiltersForShoppingWindow/PriceFilter";
import BrandFilter from "./FiltersForShoppingWindow/BrandFilter";
import SortbyFilter from "./FiltersForShoppingWindow/SortbyFilter";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";

import styles from "../../styles/ShopPageComponents/ShoppingWindow/main.module.css";
import { useRecoilState } from "recoil";
import { shoppingCart } from "../../atoms/shopping-cart";

function ShoppingWindow({ query, brands, products, categories }) {
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

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
          <BrandFilter query={query} brands={brands} />
          <SortbyFilter query={query} />
        </div>
      </div>
      {/* PRODUCTS LISTING */}
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
            <div className={styles.product}>
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
    </div>
  );
}

export default ShoppingWindow;
