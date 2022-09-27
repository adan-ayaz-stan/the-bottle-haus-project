import React from "react";

import styles from "../../styles/IndexPageComponents/RareAndHardToFindStyles/main.module.css";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";
import sampleImageMain from "../../cms/rare-to-find-images/sample-image-main.png";
import Image from "next/image";

const dummyData = [
  {
    name: "Hendricks Lunar Gin Limited Edition",
    newPrice: 35.49,
    oldPrice: 48.29,
  },
  {
    name: "Smirnoff vodka",
    newPrice: 45.09,
    oldPrice: 47.29,
  },
  {
    name: "Captain Morgan rum",
    newPrice: 39.99,
    oldPrice: 43.29,
  },
];

export default function RareAndHardToFindSection() {
  return (
    <div className={styles.main}>
      <h1>RARE & HARD TO FIND</h1>
      <div className={styles.teamComment}>
        <hr />
        The Bottle Haus's team of connoisseurs have done all the hard work for
        you.
      </div>

      <div className={styles.specialAdvertisement}>
        <div className={styles.imageMain}>
          <Image src={sampleImageMain} height={500} width={500}></Image>
        </div>
        <div className={styles.textMain}>
          <h3>Louis WarmWind's Special</h3>
          <hr />
          <p>The oldest being over a 100 years old..</p>
        </div>
      </div>

      <div className={styles.specialProductsListingContainer}>
        <div className={styles.productListing}>
          {dummyData.map((ele, ind) => {
            return (
              <div className={styles.product}>
                <div>
                  <Image src={plusIcon} width={35} height={35}></Image>
                </div>

                <div>
                  <Image src={sampleImage} height={250} width={250}></Image>
                </div>

                <div>
                  <h4>{ele.name}</h4>
                  <div>
                    <p>${ele.newPrice}</p>
                    <p>${ele.oldPrice}</p>
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
