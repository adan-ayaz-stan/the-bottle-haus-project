import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { dropdownOpen } from "../../../atoms/shop-page";

import styles from "../../../styles/ShopPageComponents/FilterForShoppingWindow/price-filter.module.css";

function PriceFilter({ query }) {
  const [pagedropdownValue, setPagedropdownValue] =
    useRecoilState(dropdownOpen);

  const router = useRouter();

  const [value, setValue] = useState([10, 15000]);

  const handleChange = (event, changeValue) => {
    setValue(changeValue);
  };

  const filterSubmitHandler = () => {
    const newEntry = {
      min: value[0],
      max: value[1],
    };
    router.push({
      pathname: "/shop",
      query: { ...query, ...newEntry, ...{ filterbyprice: true } },
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
            priceFilter: !pagedropdownValue.priceFilter,
            brandFilter: false,
            sortbyFilter: false,
          });
        }}
      >
        Price
      </p>
      {pagedropdownValue.priceFilter == true ? (
        <>
          <div className={styles.dropdown}>
            <h3 className={styles.heading}>Price Range</h3>
            <p className={styles.range_in_text}>
              ${value[0]} - ${value[1]}
            </p>
            <label className={styles.price_limit_label}>
              Maximum price: $15000
            </label>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={10}
              max={15000}
              sx={{
                color: "#ffffff",
                width: "90%",
                "& .MuiSlider-thumb": {
                  border: "solid 1px #6e8381",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#6e8381",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#eeefff",
                },
              }}
            />
            <button onClick={filterSubmitHandler}>Apply Filter</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PriceFilter;
