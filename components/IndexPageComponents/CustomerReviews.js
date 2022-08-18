import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "../../styles/IndexPageComponents/CustomerReviewsStyles/main.module.css";
import reviewCardStyle from "../../styles/IndexPageComponents/CustomerReviewsStyles/customer-review-component.module.css";

import sampleBottleImage from "../../cms/rare-to-find-images/sample-image-main.png";

export default function CustomerReviews() {
  const [windowWidth, setWindowWidth] = useState(1440);

  useEffect(() => {
    // SETTING WINDOW WIDTH
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <h2 className={styles.first_heading}>Let customers</h2>
        <h2 className={styles.second_heading}>Speak for us</h2>
      </div>
      <Swiper
        className={styles.submain}
        spaceBetween={50}
        slidesPerView={windowWidth > 660 ? 3 : 1}
      >
        <SwiperSlide>
          <div className={reviewCardStyle.main}>
            <h2 className={reviewCardStyle.review_heading}>
              I was very satisfied
            </h2>
            <p className={reviewCardStyle.customer_review}>
              My order was delivered on time and Peach Crown Royal was sufficent
              in quality.
            </p>
            <p className={reviewCardStyle.customer_name}>John Doe</p>
            <span className={reviewCardStyle.image_container}>
              <Image
                src={sampleBottleImage}
                alt="review-product"
                layout="fill"
              />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={reviewCardStyle.main}>
            <h2 className={reviewCardStyle.review_heading}>
              I was very satisfied
            </h2>
            <p className={reviewCardStyle.customer_review}>
              My order was delivered on time and Peach Crown Royal was sufficent
              in quality.
            </p>
            <p className={reviewCardStyle.customer_name}>John Doe</p>
            <span className={reviewCardStyle.image_container}>
              <Image
                src={sampleBottleImage}
                alt="review-product"
                layout="fill"
              />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={reviewCardStyle.main}>
            <h2 className={reviewCardStyle.review_heading}>
              I was very satisfied
            </h2>
            <p className={reviewCardStyle.customer_review}>
              My order was delivered on time and Peach Crown Royal was sufficent
              in quality.
            </p>
            <p className={reviewCardStyle.customer_name}>John Doe</p>
            <span className={reviewCardStyle.image_container}>
              <Image
                src={sampleBottleImage}
                alt="review-product"
                layout="fill"
              />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={reviewCardStyle.main}>
            <h2 className={reviewCardStyle.review_heading}>
              I was very satisfied
            </h2>
            <p className={reviewCardStyle.customer_review}>
              My order was delivered on time and Peach Crown Royal was sufficent
              in quality.
            </p>
            <p className={reviewCardStyle.customer_name}>John Doe</p>
            <span className={reviewCardStyle.image_container}>
              <Image
                src={sampleBottleImage}
                alt="review-product"
                layout="fill"
              />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={reviewCardStyle.main}>
            <h2 className={reviewCardStyle.review_heading}>
              I was very satisfied
            </h2>
            <p className={reviewCardStyle.customer_review}>
              My order was delivered on time and Peach Crown Royal was sufficent
              in quality.
            </p>
            <p className={reviewCardStyle.customer_name}>John Doe</p>
            <span className={reviewCardStyle.image_container}>
              <Image
                src={sampleBottleImage}
                alt="review-product"
                layout="fill"
              />
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
