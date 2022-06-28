import Image from "next/image";
import React from "react";

import styles from "../../styles/CallToActionCardStyles/CallToActionCardStyleMain.module.css";

export default function CallToActionCardComponent(props) {
  return (
    <div className={styles.main}>
      <a href="/">
        <div className={styles.image}>
          <Image src={props.imageSource} height={105} width={105}></Image>
        </div>
        <div>
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
        </div>
      </a>
    </div>
  );
}
