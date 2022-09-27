import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "../../styles/ShopPageComponents/SideMenu/main.module.css";

function SideMenu({ query, categories }) {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Shop by brands</h2>
      {categories.map((ele, ind) => {
        return (
          <a
            className={styles.category}
            style={
              query.category == ele.type
                ? { backgroundColor: "#31E1F7", color: "white" }
                : {}
            }
            key={ind + Math.random() * ind}
            onClick={() => {
              router.push({
                pathname: "/shop",
                query: {
                  ...query,
                  ...{
                    category: ele.type,
                  },
                },
              });
            }}
          >
            {ele.name}
          </a>
        );
      })}
    </div>
  );
}

export default SideMenu;
