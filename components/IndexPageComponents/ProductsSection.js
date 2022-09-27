import React from "react";
import Image from "next/image";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";

import styles from "../../styles/IndexPageComponents/ProductsSectionStyles/main.module.css";

const dummyData = [
  {
    name: "Hendricks Lunar Gin Limited Edition",
    price: {
      new: 35.49,
      old: 48.29,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "gin",
    img: "Image Link",
    brand: "BrandVH",
  },
  {
    name: "Smirnoff vodka",
    price: {
      new: 45.09,
      old: 47.19,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "gin",
    img: "Image Link",
    brand: "BrandVH",
  },
  {
    name: "Captain Morgan rum",
    price: {
      new: 39.99,
      old: 43.29,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "gin",
    img: "Image Link",
    brand: "BrandVH",
  },
  {
    name: "Jack Daniel's whiskey",
    price: {
      new: 32.59,
      old: 38.19,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "gin",
    img: "Image Link",
    brand: "BrandVH",
  },
  {
    name: "Bacardi rum",
    price: {
      new: 42.0,
      old: 46.99,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "gin",
    img: "Image Link",
    brand: "BrandVH",
  },
  {
    name: "Fireball Cinnamon Whisky",
    price: {
      new: 34.19,
      old: 35.59,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "gin",
    img: "Image Link",
    brand: "BrandVH",
  },
];

export default function ProductsSection() {
  return (
    <div className={styles.main}>
      <h1>Bottles below $50</h1>
      <div className={styles.product_listing}>
        {dummyData.map((ele, ind) => {
          return (
            <div className={styles.product}>
              <div className={styles.add_to_cart_icon}>
                <Image src={plusIcon} width={35} height={35}></Image>
              </div>

              <div className={styles.product_image}>
                <Image src={sampleImage} layout="fill"></Image>
              </div>

              <div className={styles.product_details}>
                <h4 className={styles.product_name}>{ele.name}</h4>
                <div className={styles.product_price}>
                  <p>${ele.newPrice}</p>
                  <p>${ele.oldPrice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
