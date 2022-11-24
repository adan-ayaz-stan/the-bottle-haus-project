import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/IndexPageComponents/NavbarStyles/2nd-nav-main.module.css";

export default function Navbar2nd() {
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
    <>
      <div className={styles.main}>
        {categories.map((ele, ind) => {
          if (router.asPath == "/shop") {
            return <a>{ele.name}</a>;
          } else {
            return (
              <Link
                href={`/shop?category=${ele.type}`}
                key={ind + Math.random() * ind}
              >
                <a>{ele.name}</a>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
