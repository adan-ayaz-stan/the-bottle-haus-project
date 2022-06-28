import Image from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import styles from "../../styles/ImageSlider/imageSlider-main.module.css";
import image01 from '../../cms/images-slider/image-01.jpg';
import image02 from '../../cms/images-slider/image-02.jpg';
import image03 from '../../cms/images-slider/image-03.jpg';
import image04 from '../../cms/images-slider/image-04.jpg';
import image05 from '../../cms/images-slider/image-05.jpg';

export default function ImageSlider() {

  return (
    <Swiper
      className={styles.main}
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={
        {
          delay: 2500
        }
      }
      pagination={{
        clickable: true,
        type: 'bullets',
        bulletClass: styles.paginationBullet,
        bulletActiveClass: styles.paginationBulletActive
      }}
      effect='fade'
    >
      <SwiperSlide>
        <div className={`${styles.subcontainer} ${styles.subcontainerFirst}`} >
        <Image src={image01} alt='slider-image' loading='lazy' layout='fill'></Image>
        <h2>Raising a glass to tradition</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`${styles.subcontainer} ${styles.subcontainerSecond}`} >
        <Image src={image02} alt='slider-image' loading='lazy' layout='fill'></Image>
        <h2>It's the booze talking!</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`${styles.subcontainer} ${styles.subcontainerThird}`} >
        <Image src={image03} alt='slider-image' loading='lazy' layout='fill'></Image>
        <h2>Capturing the personality</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={`${styles.subcontainer} ${styles.subcontainerFourth}`} >
        <Image src={image04} alt='slider-image' loading='lazy' layout='fill'></Image>
      <h2>Guinness’s Good things come to those who wait campaign</h2>
      </div></SwiperSlide>
      <SwiperSlide>
      <div className={`${styles.subcontainer} ${styles.subcontainerFifth}`} >
        <Image src={image05} alt='slider-image' loading='lazy' layout='fill'></Image>
      <h2>all-encompassing strapline</h2>
      </div>
      </SwiperSlide>

    </Swiper>
  )
}
