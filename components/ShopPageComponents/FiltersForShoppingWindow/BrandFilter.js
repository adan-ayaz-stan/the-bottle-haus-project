import { Checkbox, FormControlLabel } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useRecoilState, useSetRecoilState } from "recoil";

import { brandFilterAtom, dropdownOpen } from "../../../atoms/shop-page";

import styles from "../../../styles/ShopPageComponents/FilterForShoppingWindow/brand-filter.module.css";

const dummyData = [
  {
    repName: "Hendrick's",
    codeName: "hendricks",
  },
  {
    repName: "Smirnoff",
    codeName: "smirnoff",
  },
  {
    repName: "Captain Morgan",
    codeName: "captainmorgan",
  },
  {
    repName: "Jack Daniel's",
    codeName: "jackdaniels",
  },
  {
    repName: "Bacardi",
    codeName: "bacardi",
  },
  {
    repName: "Fireball",
    codeName: "fireball",
  },
];

function BrandFilter({ query, brands }) {
  const [pagedropdownValue, setPagedropdownValue] =
    useRecoilState(dropdownOpen);

  const [brandFilterAtomValue, setBrandFilterAtom] =
    useRecoilState(brandFilterAtom);

  const filterSubmitHandler = (e) => {
    e.preventDefault();
    const formel = document.forms.brandFilterForm;
    const formData = new FormData(formel);
    let data = [];
    dummyData.forEach((ele) => {
      if (formData.get(ele.codeName) == "on") {
        data.push(ele.codeName);
      }
    });
    setBrandFilterAtom(data);
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
                    control={
                      brandFilterAtomValue.includes(ele.codeName) == true ? (
                        <Checkbox defaultChecked />
                      ) : (
                        <Checkbox />
                      )
                    }
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
