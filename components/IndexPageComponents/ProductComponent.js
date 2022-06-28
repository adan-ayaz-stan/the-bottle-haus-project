import Image from "next/image";
import React from "react";

import styles from "../../styles/ProductsSectionStyles/productComponent.module.css";

import sampleImage from "../../cms/product-section-images/sample-bottle.jpg";
import plusIcon from "../../cms/icons/plus.png";

export default function ProductComponent() {
  return (
    <div className={styles.main}>
      <div>
        <Image src={plusIcon} width={35} height={35}></Image>
      </div>

      <div>
        <Image src={sampleImage} height={250} width={250}></Image>
      </div>

      <div>
        <h4>Hendrick's Lunar Gin Limited Release</h4>
        <div>
          <p>$24.65</p>
          <p>$28.60</p>
        </div>
      </div>
    </div>
  );
}
