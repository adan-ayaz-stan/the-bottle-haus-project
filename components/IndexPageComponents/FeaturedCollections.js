import React from "react";

import styles from "../../styles/IndexPageComponents/FeaturedCollections/main.module.css";

function FeaturedCollections() {
  return (
    <div className={styles.main}>
      <div className={styles.container_one}>
        <h2>Featured</h2>
        <h2>Collections</h2>
      </div>
      <div className={styles.container_two}>
        <a href="/" className={styles.item_1}></a>
        <a href="/" className={styles.item_2}></a>
        <a href="/" className={styles.item_3}>
          Tequila
        </a>
        <a href="/" className={styles.item_4}></a>
        <a href="/" className={styles.item_5}>
          Gin
        </a>
        <a href="/" className={styles.item_6}></a>
        <a href="/" className={styles.item_7}></a>
        <a href="/" className={styles.item_8}></a>
        <a href="/" className={styles.item_9}>
          Rare and Hard to Find
        </a>
      </div>
    </div>
  );
}

export default FeaturedCollections;
