import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useRecoilState } from "recoil";

import { dropdownOpen } from "../../../atoms/shop-page";

import styles from "../../../styles/ShopPageComponents/FilterForShoppingWindow/sortby-filter.module.css";

function SortbyFilter({ query }) {
  const [pagedropdownValue, setPagedropdownValue] =
    useRecoilState(dropdownOpen);

  const router = useRouter();

  const lowToHighFunctionHandler = () => {
    router.push({
      pathname: "/shop",
      query: {
        ...query,
        ...{
          sortby: "asc",
        },
      },
    });
    setPagedropdownValue({
      priceFilter: false,
      brandFilter: false,
      sortbyFilter: false,
    });
  };
  const highToLowFunctionHandler = () => {
    router.push({
      pathname: "/shop",
      query: {
        ...query,
        ...{
          sortby: "des",
        },
      },
    });
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
            <p onClick={lowToHighFunctionHandler}>Price - Low to High</p>
            <p onClick={highToLowFunctionHandler}>Price - High to Low</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SortbyFilter;
