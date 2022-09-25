import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "../../styles/ShopPageComponents/SideMenu/main.module.css";

function SideMenu({ query }) {
  const router = useRouter();

  const categories = [
    {
      name: "Whiskey",
      type: "whiskey",
    },
    {
      name: "Tequila",
      type: "tequila",
    },
    {
      name: "Vodka",
      type: "vodka",
    },
    {
      name: "Gin",
      type: "gin",
    },
    {
      name: "Cognac & Brandy",
      type: "cognacandbrandy",
    },
    {
      name: "Rum",
      type: "rum",
    },
    {
      name: "Liquor",
      type: "liqour",
    },
    {
      name: "Champagne",
      type: "champagne",
    },
    {
      name: "Wine",
      type: "wine",
    },
  ];

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Shop by brands</h2>
      {categories.map((ele) => {
        return (
          <a
            className={styles.category}
            style={
              query.category == ele.type
                ? { backgroundColor: "#31E1F7", color: "white" }
                : {}
            }
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
