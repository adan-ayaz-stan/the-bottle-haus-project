import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useRecoilState } from "recoil";

import { dropdownOpen, sortByFilterAtom } from "../../../atoms/shop-page";

import styles from "../../../styles/ShopPageComponents/FilterForShoppingWindow/sortby-filter.module.css";

function SortbyFilter({ query }) {
  const [pagedropdownValue, setPagedropdownValue] =
    useRecoilState(dropdownOpen);

  const [sortByFilterAtomValue, setSortByFilterAtom] =
    useRecoilState(sortByFilterAtom);

  const router = useRouter();

  const lowToHighFunctionHandler = () => {
    setSortByFilterAtom("asc");
    setPagedropdownValue({
      priceFilter: false,
      brandFilter: false,
      sortbyFilter: false,
    });
  };
  const highToLowFunctionHandler = () => {
    setSortByFilterAtom("desc");
    setPagedropdownValue({
      priceFilter: false,
      brandFilter: false,
      sortbyFilter: false,
    });
  };

  return (
    <div className={styles.main}>
      <p
        style={{
          padding: "15px 2em",
        }}
        onClick={() => {
          setPagedropdownValue({
            priceFilter: false,
            brandFilter: false,
            sortbyFilter: !pagedropdownValue.sortbyFilter,
          });
        }}
      >
        Sort by
      </p>
      {pagedropdownValue.sortbyFilter == true ? (
        <>
          <div className={styles.dropdown}>
            <h3 className={styles.heading}>Sort by</h3>
            <p
              onClick={lowToHighFunctionHandler}
              style={
                sortByFilterAtomValue == "asc"
                  ? { outline: "solid 1px green" }
                  : {}
              }
            >
              Price - Low to High
            </p>
            <p
              onClick={highToLowFunctionHandler}
              style={
                sortByFilterAtomValue == "desc"
                  ? { outline: "solid 1px green" }
                  : {}
              }
            >
              Price - High to Low
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SortbyFilter;
