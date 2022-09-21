import Head from "next/head";

import Navbar from "../components/IndexPageComponents/Navbar";
import Navbar2nd from "../components/IndexPageComponents/Navbar-2nd";
import ImageSlider from "../components/IndexPageComponents/ImageSlider";
import CallToActionCardComponent from "../components/IndexPageComponents/CallToActionCardComponent";
import ProductsSection from "../components/IndexPageComponents/ProductsSection";
import RareAndHardToFindSection from "../components/IndexPageComponents/RareAndHardToFindSection";
import CustomerReviews from "../components/IndexPageComponents/CustomerReviews";
import FeaturedCollections from "../components/IndexPageComponents/FeaturedCollections";
import Footer from "../components/IndexPageComponents/Footer";

import searchImage from "../cms/call-to-action-card-images/search-image.jpg";
import tapImage from "../cms/call-to-action-card-images/tap-image.jpg";
import drinkImage from "../cms/call-to-action-card-images/drink-image.jpg";

import styles from "../styles/index.module.css";
import SpecialProduct from "../components/IndexPageComponents/SpecialProduct";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bottle Haus | Home</title>
        <meta
          name="description"
          content="Get the best of the best liqour from your top rated liqour platform online"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Navbar2nd />

      <ImageSlider />

      <div className={styles.textAfterSlider}>
        <h2>Lighting Fast Shipping..</h2>
        <h3>From Our Haus to Yours</h3>
      </div>

      <div className={styles.callToActionCardsContainer}>
        <CallToActionCardComponent
          imageSource={searchImage}
          h3={"Search"}
          p={"1500+ bottles to choose from.."}
        ></CallToActionCardComponent>
        <CallToActionCardComponent
          imageSource={tapImage}
          h3={"Tap"}
          p={"Checkout in seconds with express checkout.."}
        ></CallToActionCardComponent>
        <CallToActionCardComponent
          imageSource={drinkImage}
          h3={"Drink"}
          p={"Delivered to your door within days.."}
        ></CallToActionCardComponent>
      </div>
      <ProductsSection />
      <RareAndHardToFindSection />
      <CustomerReviews />
      <SpecialProduct />
      <FeaturedCollections />
      <Footer />
    </div>
  );
}
