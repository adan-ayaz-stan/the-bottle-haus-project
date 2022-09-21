import React from "react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import styles from "../../styles/BlogPageComponents/BlogSlider/main.module.css";

import sliderArrow from "../../cms/icons/slider-arrow.svg";
import Image from "next/image";

function BlogSlider() {
  return (
    <div className={styles.main}>
      <div className={`${styles.prev_slide_el} swiper-js-prev-el`}>
        <Image
          src={sliderArrow}
          alt="arrow-slider"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
      <div className={`${styles.next_slide_el} swiper-js-next-el`}>
        <Image src={sliderArrow} alt="arrow-slider" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={50}
        autoplay={{
          delay: 3500,
        }}
        effect="fade"
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-js-prev-el",
          nextEl: ".swiper-js-next-el",
        }}
        className={styles.slider}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide className={styles.slider_slide}>
          <div className={styles.slide_content}>
            <div>
              <h2 className={styles.slide_heading}>Blog Heading</h2>
              <p className={styles.slide_posted_time}>
                Posted at 14:37 28/7/2024
              </p>
              <p className={styles.slide_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/" className={styles.slide_link}>
                Read more..
              </a>
            </div>
          </div>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2018/09/01/23/19/tequila-3647876_960_720.jpg"
            }
            alt="slide-image"
            width={400}
            height={200}
            className={styles.slide_image}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>
          <div className={styles.slide_content}>
            <div>
              <h2 className={styles.slide_heading}>Blog Heading</h2>
              <p className={styles.slide_posted_time}>
                Posted at 14:37 28/7/2024
              </p>
              <p className={styles.slide_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/" className={styles.slide_link}>
                Read more..
              </a>
            </div>
          </div>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2016/07/27/00/53/margaritas-1544340_960_720.jpg"
            }
            alt="slide-image"
            width={400}
            height={200}
            className={styles.slide_image}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>
          <div className={styles.slide_content}>
            <div>
              <h2 className={styles.slide_heading}>Blog Heading</h2>
              <p className={styles.slide_posted_time}>
                Posted at 14:37 28/7/2024
              </p>
              <p className={styles.slide_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/" className={styles.slide_link}>
                Read more..
              </a>
            </div>
          </div>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2020/10/07/02/07/tequila-5633785_960_720.jpg"
            }
            alt="slide-image"
            width={400}
            height={200}
            className={styles.slide_image}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slider_slide}>
          <div className={styles.slide_content}>
            <div>
              <h2 className={styles.slide_heading}>Blog Heading</h2>
              <p className={styles.slide_posted_time}>
                Posted at 14:37 28/7/2024
              </p>
              <p className={styles.slide_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="/" className={styles.slide_link}>
                Read more..
              </a>
            </div>
          </div>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2021/01/04/17/20/alcohol-5888208_960_720.jpg"
            }
            alt="slide-image"
            width={400}
            height={100}
            className={styles.slide_image}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BlogSlider;
