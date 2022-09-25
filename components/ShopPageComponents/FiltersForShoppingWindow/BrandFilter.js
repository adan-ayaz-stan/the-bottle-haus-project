import { Checkbox, FormControlLabel } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useRecoilState } from "recoil";

import { dropdownOpen } from "../../../atoms/shop-page";

import styles from "../../../styles/ShopPageComponents/FilterForShoppingWindow/brand-filter.module.css";

const dummyData = [
  {
    repName: "Brand PH",
    codeName: "brandph",
  },
  {
    repName: "Brand RV",
    codeName: "brandrv",
  },
  {
    repName: "Brand AB",
    codeName: "brandab",
  },
  {
    repName: "Brand AH",
    codeName: "brandah",
  },
  {
    repName: "Brand IOC",
    codeName: "brandioc",
  },
  {
    repName: "Brand YC",
    codeName: "brandyc",
  },
  {
    repName: "Brand QZ",
    codeName: "brandqz",
  },
];

function BrandFilter({ query }) {
  const [pagedropdownValue, setPagedropdownValue] =
    useRecoilState(dropdownOpen);

  const router = useRouter();

  const filterSubmitHandler = (e) => {
    e.preventDefault();
    const formel = document.forms.brandFilterForm;
    const formData = new FormData(formel);
    let data = {};
    dummyData.forEach((ele) => {
      if (formData.get(ele.codeName) == "on") {
        data[ele.codeName] = true;
      }
    });
    console.log(data);
    router.push({
      pathname: "/shop",
      query: {
        ...query,
        ...data,
        ...{
          filterbybrand: true,
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
            brandFilter: !pagedropdownValue.brandFilter,
            sortbyFilter: false,
          });
        }}
      >
        Brand
      </p>
      {pagedropdownValue.brandFilter == true ? (
        <>
          <form
            className={styles.dropdown}
            onSubmit={filterSubmitHandler}
            id="brandFilterForm"
          >
            <h3 className={styles.heading}>Brands h3</h3>
            {dummyData.map((ele, ind) => {
              return (
                <div
                  className={styles.branddiv}
                  key={Math.random() * ind + ind}
                >
                  {/* <input type={"checkbox"} name={ele.codeName} /> */}
                  <FormControlLabel
                    control={<Checkbox />}
                    label={ele.repName}
                    name={ele.codeName}
                  />
                  {/* <label htmlFor={ele.codeName}>{ele.repName}</label> */}
                </div>
              );
            })}
            <button type="submit">Apply Filter</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BrandFilter;
