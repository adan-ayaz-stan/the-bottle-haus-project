import React from "react";
import { useRecoilState } from "recoil";
import { categoryFilterAtom } from "../../atoms/shop-page";

import styles from "../../styles/ShopPageComponents/SideMenu/main.module.css";

function SideMenu({ query, categories }) {
  const [categoryFilterAtomValue, setCategoryFilterAtom] =
    useRecoilState(categoryFilterAtom);

  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Shop by brands</h2>
      {categories.map((ele, ind) => {
        return (
          <a
            className={styles.category}
            style={
              categoryFilterAtomValue == ele.type
                ? { backgroundColor: "#31E1F7", color: "white" }
                : {}
            }
            key={ind + Math.random() * ind}
            onClick={() => {
              setCategoryFilterAtom(ele.type);
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
