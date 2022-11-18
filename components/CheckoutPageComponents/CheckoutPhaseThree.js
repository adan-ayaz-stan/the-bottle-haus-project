import { useState } from "react";
import { useForm } from "react-hook-form";
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

  const [paymentDetails, setPaymentDetails] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setPaymentDetails(data);
    console.log(data);
  };

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

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                  <input
                    placeholder="Card Number"
                    {...register("cardNumber", {
                      required: true,
                      validate: (value) => {
                        if (
                          /^4[0-9]{12}(?:[0-9]{3})?$/.test(value) ||
                          /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(
                            value
                          ) ||
                          /^3[47][0-9]{13}$/.test(value) ||
                          /^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value)
                        ) {
                          return true;
                        }
                        return false;
                      },
                    })}
                    style={errors.cardNumber && { outline: "solid 1px red" }}
                  />
                  <input
                    placeholder="Name on card"
                    {...register("nameOnCard", { required: true })}
                    style={errors.nameOnCard && { outline: "solid 1px red" }}
                  />
                  <div>
                    <input
                      placeholder="Expiration date"
                      {...register("expirationDate", { required: true })}
                      style={
                        errors.expirationDate && {
                          outline: "solid 1px red",
                          valueAsDate: true,
                        }
                      }
                    />
                    <input
                      placeholder="Security code"
                      {...register("securityCode", {
                        required: true,
                        minLength: 3,
                        maxLength: 3,
                        valueAsNumber: true,
                      })}
                      style={
                        errors.securityCode && { outline: "solid 1px red" }
                      }
                    />
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
                  <input
                    type="email"
                    placeholder="PayPal Wallet"
                    {...register("paypalWalletNumber", {
                      required: true,
                      validate: (value) =>
                        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
                    })}
                    style={
                      errors.paypalWalletNumber && {
                        outline: "solid 1px red",
                      }
                    }
                  />
                </>
              ) : (
                <></>
              )}
            </div>
            {paymentDetails == 0 ? (
              <div className={styles.buttons_container}>
                <button
                  className={styles.continue_to_shipping_button}
                  type="submit"
                >
                  Set CC
                </button>
              </div>
            ) : (
              ""
            )}
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
                    secondStepComplete: true,
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
                  window.alert("Custom payment backend required.");
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
            <button
              onClick={() => {
                setCheckoutValue((value) => {
                  return {
                    firstStepComplete: true,
                    secondStepComplete: false,
                    thirdStepComplete: false,
                  };
                });
              }}
            >
              Edit
            </button>
          </div>
          <div className={styles.container_child}>
            <p className={styles.step_number}>3</p>
            <div>
              <h3>Method</h3>
              <p>UPS Ground $21.75</p>
            </div>
            <button
              onClick={() => {
                setCheckoutValue((value) => {
                  return {
                    firstStepComplete: true,
                    secondStepComplete: true,
                    thirdStepComplete: false,
                  };
                });
              }}
            >
              Edit
            </button>
          </div>
        </div>
        {/*  */}
        <CartInfo />
      </div>
    </div>
  );
};

export default CheckoutPhaseThree;
