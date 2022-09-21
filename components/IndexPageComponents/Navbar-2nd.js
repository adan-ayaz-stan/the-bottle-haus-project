import React from "react";
import Link from "next/link";

import styles from "../../styles/IndexPageComponents/NavbarStyles/2nd-nav-main.module.css";

export default function Navbar2nd() {
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
    <>
      <div className={styles.main}>
        {categories.map((ele) => {
          return (
            <Link href={`shop?category=${ele.type}`}>
              <a>{ele.name}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
