import Image from "next/image";
import React from "react";

import styles from "../../styles/FooterStyles/main.module.css";

import sampleImage from "../../cms/footer-images/sample-image.jpg";
import americanExpressIcon from "../../cms/payment-methods-icons/american-express-icon.png";
import applePayIcon from "../../cms/payment-methods-icons/apple-pay-icon.png";
import discoverIcon from "../../cms/payment-methods-icons/discover-icon.png";
import jcbIcon from "../../cms/payment-methods-icons/jcb-icon.png";
import googlePayIcon from "../../cms/payment-methods-icons/google-pay-icon.png";
import mastercardIcon from "../../cms/payment-methods-icons/mastercard-icon.png";
import paypalIcon from "../../cms/payment-methods-icons/paypal-icon.png";
import visaIcon from "../../cms/payment-methods-icons/visa-icon.png";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.middleSection}>
        <div className={styles.pointerText}>
          <h4>Our Blogs</h4>
          <p>
            To create this extraordinary blend, crown blender and infused with
            the juicy flavor
          </p>
          <a href="/">Read All</a>
        </div>
        <a className={styles.blogLink} href="/">
          <div className={styles.blogLinkImage}>
            <Image src={sampleImage} height={150} width={320}></Image>
          </div>
          <h4>Enjoy $10 off on $50 subtotal</h4>
          <p>01.03.22</p>
        </a>
        <a className={styles.blogLink} href="/">
          <div className={styles.blogLinkImage}>
            <Image src={sampleImage} height={150} width={320}></Image>
          </div>
          <h4>Enjoy $10 off on $50 subtotal</h4>
          <p>22.05.22</p>
        </a>
        <a className={styles.blogLink} href="/">
          <div className={styles.blogLinkImage}>
            <Image src={sampleImage} height={150} width={320}></Image>
          </div>
          <h4>Enjoy $10 off on $50 subtotal</h4>
          <p>15.07.22</p>
        </a>
      </div>
      <div className={styles.lastSection}>
        <div className={styles.firstDiv}>
          <h3>Proposition 65 Warning</h3>
          <p>
            WARNING: Drinking distilled spirits, coolers, wine and other
            alcoholic beverages may increase the risk of cancer, and, during
            pregnancy can cause birth defects. For more information, go to{" "}
            <a href="https://www.P65Warnings.ca.gov/alcohol">
              www.P65Warnings.ca.gov/alcohol
            </a>
          </p>
        </div>
        <div className={styles.secondDiv}>
          <div>
            <h3>Newsletter</h3>
            <p>
              Subscribe to hear first about our exclusive offers and latest
              arrivals.
            </p>
            <form action="/">
              <input type="text" placeholder="Company (Optional)"></input>
              <button type="submit">GO</button>
            </form>
          </div>

          <div>
            <h3>Accepted Payments</h3>
            <p>
              <Image
                src={applePayIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={americanExpressIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={discoverIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={googlePayIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={jcbIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={mastercardIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={paypalIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
              <Image
                src={visaIcon}
                alt="payment-method-icon"
                height={45}
                width={45}
              ></Image>
            </p>
          </div>
          <div>Please Drink Responsibly</div>
          <div>
            © 2021, The Bottle Haus
          </div>
        </div>
        <div className={styles.thirdDiv}>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="/">Terms and Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Shipping & Returns</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Order Tracking</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
