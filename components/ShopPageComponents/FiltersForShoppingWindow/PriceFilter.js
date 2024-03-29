import { Slider } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { dropdownOpen, priceFilterAtom } from "../../../atoms/shop-page";

import styles from "../../../styles/ShopPageComponents/FilterForShoppingWindow/price-filter.module.css";

function PriceFilter({ query }) {
  const [pagedropdownValue, setPagedropdownValue] =
    useRecoilState(dropdownOpen);
  const setPriceFilterAtom = useSetRecoilState(priceFilterAtom);

  const [value, setValue] = useState([10, 200]);

  const handleChange = (event, changeValue) => {
    setValue(changeValue);
  };

  const filterSubmitHandler = () => {
    if (value[0] < value[1]) {
      setPriceFilterAtom({
        min: +value[0],
        max: +value[1],
      });
      setPagedropdownValue({
        priceFilter: false,
        brandFilter: false,
        sortbyFilter: false,
      });
    } else {
      console.log("Invalid values");
    }
  };

  return (
    <div className={styles.main}>
      <p
        style={{
          padding: "15px",
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
              <input
                type={"number"}
                min={10}
                max={199}
                maxLength={5}
                value={value[0]}
                onChange={(e) => {
                  setValue((value) => [e.target.value, value[1]]);
                }}
              />
              -
              <input
                type={"number"}
                min={11}
                max={200}
                maxLength={5}
                value={value[1]}
                onChange={(e) => {
                  setValue((value) => [value[0], e.target.value]);
                }}
              />
            </p>
            <label className={styles.price_limit_label}>
              Maximum price: $200
            </label>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={10}
              max={200}
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
