import Image from "next/image";
import sampleImage from "../../cms/images-slider/image-06.jpg";
import { useRecoilState } from "recoil";

import { shoppingCart } from "../../atoms/shopping-cart";

import { BsXLg } from "react-icons/bs/index";

import styles from "../../styles/CheckoutPageComponents/FirstSection/main.module.css";

const FirstSection = () => {
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>
        My{" "}
        <span style={{ WebkitTextStroke: "black 1px", color: "transparent" }}>
          Cart (3)
        </span>
      </h1>

      <div className={styles.product_listing}>
        {/*  */}
        <div
          className={styles.product}
          // style={{ borderBottom: "solid 1px black" }}
        >
          <div
            className={styles.product_image}
            style={{ minHeight: "fit-content" }}
          >
            {/* <Image src={sampleImage} alt='product-image' layout='fill' /> */}
          </div>
          <div className={styles.product_name}>Product</div>
          <div className={styles.product_price} style={{ fontSize: "1em" }}>
            Price
          </div>
          <div className={styles.remove_from_cart}>&nbsp;</div>
        </div>
        {/* HEADERS ABOVE - NO ALTERATION ALLOWED */}

        {shoppingCartValue.map((ele, ind, arr) => {
          function removeFromCart() {
            let oldCart = shoppingCartValue.slice();
            oldCart.splice(ind, 1);
            setShoppingCart(oldCart);
          }

          return (
            <div className={styles.product}>
              <div className={styles.product_image}>
                <Image src={sampleImage} alt="product-image" layout="fill" />
              </div>
              <div className={styles.product_name}>{ele.name}</div>
              <div className={styles.product_price}>${ele.price}</div>
              <div
                className={styles.remove_from_cart}
                style={{ cursor: "pointer" }}
                onClick={removeFromCart}
              >
                <BsXLg />
              </div>
            </div>
          );
        })}
        {shoppingCartValue.length == 0 ? (
          <div className={styles.empty_cart_message}>
            Your shopping cart is empty.
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FirstSection;
