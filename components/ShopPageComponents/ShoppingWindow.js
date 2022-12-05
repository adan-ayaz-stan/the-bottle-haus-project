import React, { useEffect, useState } from "react";
import Image from "next/image";

import PriceFilter from "./FiltersForShoppingWindow/PriceFilter";
import BrandFilter from "./FiltersForShoppingWindow/BrandFilter";
import SortbyFilter from "./FiltersForShoppingWindow/SortbyFilter";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";

import styles from "../../styles/ShopPageComponents/ShoppingWindow/main.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { shoppingCart } from "../../atoms/shopping-cart";
import {
  brandFilterAtom,
  categoryFilterAtom,
  priceFilterAtom,
  sortByFilterAtom,
} from "../../atoms/shop-page";

function ShoppingWindow({ query, brands, categories }) {
  const priceFilterRecoilValue = useRecoilValue(priceFilterAtom);
  const brandFilterRecoilValue = useRecoilValue(brandFilterAtom);
  const sortByFilterRecoilValue = useRecoilValue(sortByFilterAtom);
  const [categoryFilterRecoilValue, setCategoryFilterAtom] =
    useRecoilState(categoryFilterAtom);

  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);

    const data = await fetch("/api/getProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filterByPrice: {
          min: priceFilterRecoilValue.min,
          max: priceFilterRecoilValue.max,
        },
        filterByBrand: brandFilterRecoilValue,
        filterBySortBy: sortByFilterRecoilValue,
        filterByCategory: categoryFilterRecoilValue,
      }),
    }).then((data) => data.json());
    setProducts(data);

    setLoading(false);
  }

  useEffect(() => {
    if (
      query.category != categoryFilterRecoilValue &&
      categoryFilterRecoilValue == ""
    ) {
      setCategoryFilterAtom(query.category);
      console.log("function ran");
    }
    fetchProducts();
  }, [
    priceFilterRecoilValue,
    brandFilterRecoilValue,
    sortByFilterRecoilValue,
    categoryFilterRecoilValue,
  ]);

  return (
    <div className={styles.main}>
      {/* TOPBAR */}
      <div className={styles.topbar}>
        <h2>
          {categories.map((ele) => {
            if (ele.type == categoryFilterRecoilValue) {
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
        {loading == true ? (
          <div className={styles.loading_container}>
            <div className={styles.loading_image}>Waiting for network...</div>
          </div>
        ) : (
          <>
            {products.length == 0
              ? "No products found."
              : products.map((ele, ind) => {
                  function addToCart() {
                    const oldCart = shoppingCartValue;
                    const newItem = [
                      {
                        name: ele.name,
                        price: ele.price.new,
                        img: ele.img,
                      },
                    ];
                    setShoppingCart(oldCart.concat(newItem));
                  }

                  return (
                    <div
                      className={styles.product}
                      key={ind + Math.random() * ind}
                    >
                      <div
                        onClick={addToCart}
                        className={styles.add_to_cart_icon}
                      >
                        <Image src={plusIcon} layout="fill"></Image>
                      </div>

                      <a
                        href={`/product/${ele.id}`}
                        alt="product-page-link"
                        className={styles.product_image}
                      >
                        <Image src={ele.img} layout="fill"></Image>
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
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingWindow;
