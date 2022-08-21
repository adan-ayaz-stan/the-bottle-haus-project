import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "../../styles/BlogPageComponents/BlogSlider/main.module.css";

function BlogSlider() {
  return (
    <div className={styles.main}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={styles.slider}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.slider_slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BlogSlider;
