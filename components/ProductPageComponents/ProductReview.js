import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from "@mui/material";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md/index";

import "swiper/css";
import styles from "../../styles/ProductPageComponents/ProductReview/main.module.css";

function ProductReview() {
  const [windowWidth, setWindowWidth] = useState(1440);

  useEffect(() => {
    // SETTING WINDOW WIDTH
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className={styles.main}>
      <div className={styles.heading_container}>
        <p>What our customers</p>
        <h2>Are Saying</h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={windowWidth > 660 ? 3 : 1}
        modules={[Navigation]}
        navigation={{
          prevEl: "#product-review-slide-prev",
          nextEl: "#product-review-slide-next",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.slider}
      >
        <SwiperSlide className={styles.slider_slide}>
          <div>
            <Rating name="read-only" value={3.5} precision={0.5} readOnly />
            <h2>Route Packaging Protection</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>
          <div>
            <Rating name="read-only" value={3.5} precision={0.5} readOnly />
            <h2>Route Packaging Protection</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>
          <div>
            <Rating name="read-only" value={3.5} precision={0.5} readOnly />
            <h2>Route Packaging Protection</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>
          <div>
            <Rating name="read-only" value={3.5} precision={0.5} readOnly />
            <h2>Route Packaging Protection</h2>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.slider_navigation_container}>
        <div id="product-review-slide-prev">
          <MdOutlineArrowBackIosNew />
        </div>
        <div id="product-review-slide-next">
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
