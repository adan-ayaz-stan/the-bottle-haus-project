import { useState } from "react";
import { useRecoilState } from "recoil";

import { checkout } from "../../atoms/checkout-page";

import { Checkbox } from "@mui/material";
import { BsCircle, BsCircleFill } from "react-icons/bs/index";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
} from "react-icons/si/index";

import styles from "../../styles/CheckoutPageComponents/CheckoutPhaseThree/main.module.css";
import CartInfo from "./miniComponents/CartInfo";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckoutPhaseThree = () => {
  const [checkoutValue, setCheckoutValue] = useRecoilState(checkout);

  const [paymentByCC, setPaymentByCC] = useState(true);
  const [paymentByPayPal, setPaymentByPayPal] = useState(false);

  const [sameBillingAddress, setSameBillingAddress] = useState(true);
  const [differentBillingAddress, setDifferentBillingAddress] = useState(false);

  return (
    <div className={styles.main}>
      {/* LEFT SIDE */} {/* LEFT SIDE */} {/* LEFT SIDE */} {/* LEFT SIDE */}
      <div className={styles.submain_left}>
        <div className={styles.checkout_heading}>
          <h2>Checkout</h2>
          <h2>Details</h2>
        </div>

        <div className={styles.credit_card_details}>
          <div className={styles.heading}>
            <p>4</p>
            <p>Payment</p>
          </div>

          <form className={styles.form}>
            <label style={{ color: "gray", fontSize: ".8em", width: "100%" }}>
              *All payments are safe and encrypted.
            </label>
            <div className={styles.payment_method}>
              <div className={styles.heading}>
                <Checkbox
                  {...label}
                  checked={paymentByCC}
                  icon={<BsCircle />}
                  checkedIcon={<BsCircleFill style={{ color: "#1b6254" }} />}
                  className={styles.checkbox}
                  onClick={() => {
                    setPaymentByCC(true);
                    setPaymentByPayPal(false);
                  }}
                />
                Credit Card
                <SiVisa style={{ fontSize: "40px" }} />
                <SiMastercard style={{ fontSize: "30px" }} />
                <SiAmericanexpress style={{ fontSize: "30px" }} />
              </div>
              {paymentByCC ? (
                <>
                  <input placeholder="Card Number" />
                  <input placeholder="Name on card" />
                  <div>
                    <input placeholder="Expiration date" />
                    <input placeholder="Security code" />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.payment_method}>
              <div className={styles.heading}>
                <Checkbox
                  {...label}
                  checked={paymentByPayPal}
                  icon={<BsCircle />}
                  checkedIcon={<BsCircleFill style={{ color: "#1b6254" }} />}
                  onClick={() => {
                    setPaymentByCC(false);
                    setPaymentByPayPal(true);
                  }}
                />
                PayPal
                <SiPaypal style={{ fontSize: "30px" }} />
              </div>
              {paymentByPayPal ? (
                <>
                  <input placeholder="PayPal Wallet" />
                </>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>

        {/*  */}
        {/*  */}

        <div className={styles.credit_card_details}>
          <div className={styles.heading}>
            <p>4</p>
            <p>Billing Address</p>
          </div>

          <form className={styles.form}>
            <label style={{ color: "gray", fontSize: ".8em", width: "100%" }}>
              *Select the address that matches your card or payment method.
            </label>
            <div className={styles.payment_method}>
              <div className={styles.heading}>
                <Checkbox
                  {...label}
                  checked={sameBillingAddress}
                  icon={<BsCircle />}
                  checkedIcon={<BsCircleFill style={{ color: "#1b6254" }} />}
                  className={styles.checkbox}
                  onClick={() => {
                    setSameBillingAddress(true);
                    setDifferentBillingAddress(false);
                  }}
                />
                Same as shipping address
              </div>
            </div>
            <div className={styles.payment_method}>
              <div className={styles.heading}>
                <Checkbox
                  {...label}
                  checked={differentBillingAddress}
                  icon={<BsCircle />}
                  checkedIcon={<BsCircleFill style={{ color: "#1b6254" }} />}
                  onClick={() => {
                    setSameBillingAddress(false);
                    setDifferentBillingAddress(true);
                  }}
                />
                Different billing address
              </div>
              {differentBillingAddress ? (
                <>
                  <input placeholder="Address" />
                  <input placeholder="Apartment, Suite, etc. (Optional)" />
                  <input placeholder="City" />
                  <div>
                    <input placeholder="Country" />
                    <input placeholder="State" />
                    <input placeholder="Zip Code" />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.buttons_container}>
              <button
                className={styles.return_to_cart_button}
                onClick={(e) => {
                  e.preventDefault();
                  setCheckoutValue({
                    firstStepComplete: true,
                    secondStepComplete: false,
                    thirdStepComplete: false,
                  });
                }}
              >
                Return to shipping
              </button>
              <button
                className={styles.continue_to_shipping_button}
                onClick={(e) => {
                  e.preventDefault();
                  window.alert("Payment process backend required next.");
                  // setCheckoutValue({
                  //   firstStepComplete: true,
                  //   secondStepComplete: true,
                  //   thirdStepComplete: true,
                  // });
                }}
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
        {/*  */}
        {/*  */}
      </div>
      {/* RIGHT SIDE  */}
      {/* RIGHT SIDE  */}
      {/* RIGHT SIDE  */}
      <div className={styles.submain_right}>
        {/*  */}
        <div className={styles.container}>
          {/* MAPPED ELEMENTS */}
          <div className={styles.container_child}>
            <p className={styles.step_number}>1</p>
            <div>
              <h3>Contact Information</h3>
              <p>John Clayes (account@gmail.com)</p>
            </div>
            <button>Edit</button>
          </div>
          <div className={styles.container_child}>
            <p className={styles.step_number}>2</p>
            <div>
              <h3>Shipping Address</h3>
              <p>
                John Clayes, 3425 Harrison Street, San Francisco, California,
                94121, United States
              </p>
            </div>
            <button>Edit</button>
          </div>
          <div className={styles.container_child}>
            <p className={styles.step_number}>3</p>
            <div>
              <h3>Method</h3>
              <p>UPS Ground $21.75</p>
            </div>
            <button>Edit</button>
          </div>
        </div>
        {/*  */}
        <CartInfo />
      </div>
    </div>
  );
};

export default CheckoutPhaseThree;
