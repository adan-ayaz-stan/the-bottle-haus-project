import React from "react";

import styles from "../../styles/RareAndHardToFindStyles/main.module.css";

import sampleImageMain from "../../cms/rare-to-find-images/sample-image-main.png";
import Image from "next/image";
import ProductComponent from "./ProductComponent";

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
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
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
