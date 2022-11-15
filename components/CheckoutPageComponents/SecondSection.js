import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { checkout } from "../../atoms/checkout-page";
import { shoppingCart } from "../../atoms/shopping-cart";

import { Checkbox } from "@mui/material";
import { BsCircle, BsCircleFill } from "react-icons/bs/index";
import {
  FaCcPaypal,
  FaCcAmazonPay,
  FaCcApplePay,
  FaGooglePay,
} from "react-icons/fa/index";

import styles from "../../styles/CheckoutPageComponents/SecondSection/main.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SecondSection = () => {
  const [checkoutValue, setCheckout] = useRecoilState(checkout);
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);
  const [addShippingProtection, setShippingProtection] = useState(false);

  const totalBill =
    addShippingProtection == true
      ? shoppingCartValue
          .map((ele, ind) => ele.price)
          .reduce((prev, curr) => prev + curr, 3.75)
      : shoppingCartValue
          .map((ele, ind) => ele.price)
          .reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={styles.main}>
      <div className={styles.instruction_input_box}>
        <label htmlFor="instruction-text-box">
          Special instructions for seller
        </label>
        <textarea
          name="instruction-text-box"
          placeholder="e.g. Give me your best stuff..."
        ></textarea>
      </div>

      <div className={styles.checkout_box}>
        <div className={styles.total_box}>
          <p>Subtotal</p>
          <p>${totalBill}</p>
        </div>
        <label className={styles.notice_label}>
          Shipping & Taxes Calculated At Checkout
        </label>
        <div className={styles.additional_service_container}>
          <Checkbox
            {...label}
            checked={addShippingProtection}
            icon={<BsCircle />}
            checkedIcon={<BsCircleFill style={{ color: "#ebb382" }} />}
            onClick={(e) => {
              setShippingProtection((prev) => !prev);
            }}
          />
          <div className={styles.service_card}>
            <div className={styles.service_details}>
              <p>Shipping Protection</p>
              <p>from Damage,</p>
              <p>Loss & Theft</p>
            </div>
            <div className={styles.service_price}>$3.75</div>
          </div>
        </div>
        <label className={styles.disclaimer_label}>
          *By deselecting shipping protection, The Bottle Haus is not liable for
          items lost, damaged or stolen in transit.{" "}
        </label>

        <button
          className={styles.checkout_button}
          onClick={() => {
            setCheckout({
              firstStepComplete: true,
              secondStepComplete: false,
            });
          }}
        >
          Checkout
        </button>

        <div className={styles.payment_options}>
          <div className={styles.p_option_1}>
            <FaCcAmazonPay color="#e3772e" />
          </div>
          <div className={styles.p_option_2}>
            <FaCcApplePay />
          </div>
          <div className={styles.p_option_3}>
            <FaCcPaypal color="#333366" />
          </div>
          <div className={styles.p_option_4}>
            <FaGooglePay color="#919091" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
