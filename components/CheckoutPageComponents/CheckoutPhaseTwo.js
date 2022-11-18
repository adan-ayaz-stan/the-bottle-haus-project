import { useEffect, useState } from "react";

import { Checkbox } from "@mui/material";
import { BsCircle, BsCircleFill } from "react-icons/bs/index";

import styles from "../../styles/CheckoutPageComponents/CheckoutPhaseTwo/main.module.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  checkout,
  checkoutCustomerDetails,
  checkoutDeliveryBilling,
  checkoutSpecifics,
} from "../../atoms/checkout-page";
import { shoppingCart } from "../../atoms/shopping-cart";
import CartInfo from "./miniComponents/CartInfo";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const deliveryOptionsDummyData = [
  {
    name: "UPS Ground",
    desc: "2 Buisness Days",
    price: 18.75,
    code: "upsg",
  },
  {
    name: "UPS Next Day Air",
    desc: "3 Buisness Days",
    price: 28.55,
    code: "upsnd3",
  },
  {
    name: "UPS Next Day Air",
    desc: "2 Buisness Days",
    price: 33.75,
    code: "upsnd2",
  },
];

const CheckoutPhaseTwo = (props) => {
  // ATOM FOR RENDERING STEPS
  const [checkoutValue, setCheckoutValue] = useRecoilState(checkout);
  const setCheckoutDeliveryBilling = useSetRecoilState(checkoutDeliveryBilling);

  const [deliveryOptionSelected, setDeliveryOptionSelected] = useState();

  return (
    <div className={styles.main}>
      {/* CONTAINER LEFT */}
      <div className={styles.submain_left}>
        {/* FIRST DIV */}
        <div className={styles.heading}>
          <h2>Checkout</h2>
          <h2>Details</h2>
        </div>

        {/* SECOND DIV */}
        <div className={styles.shipping_details}>
          <div className={styles.shipping_heading}>
            <p>3</p>
            <p>Shipping Method</p>
          </div>

          <form className={styles.form}>
            {/*  */}
            {/* MAPPED ELEMEnTS */}
            {deliveryOptionsDummyData.map((ele, ind) => {
              return (
                <div className={styles.additional_service_container}>
                  <Checkbox
                    {...label}
                    checked={deliveryOptionSelected == ele.code ? true : false}
                    icon={<BsCircle />}
                    checkedIcon={<BsCircleFill style={{ color: "#ebb382" }} />}
                    onClick={(e) => {
                      setDeliveryOptionSelected(ele.code);
                    }}
                  />
                  <div className={styles.service_card}>
                    <div className={styles.service_icon}></div>
                    <div className={styles.service_details}>
                      <p>{ele.name}</p>
                      <p>{ele.desc}</p>
                    </div>
                    <div className={styles.service_price}>${ele.price}</div>
                  </div>
                </div>
              );
            })}

            {/*  */}

            {/*  */}

            {/*  */}
            <div className={styles.buttons_container}>
              <button
                className={styles.return_to_cart_button}
                onClick={() => {
                  setCheckoutValue({
                    firstStepComplete: true,
                    secondStepComplete: false,
                    thirdStepComplete: false,
                  });
                }}
              >
                Return to information
              </button>
              <button
                className={styles.continue_to_shipping_button}
                onClick={() => {
                  const selectedOption = deliveryOptionsDummyData.filter(
                    (ele) => ele.code == deliveryOptionSelected
                  );
                  setCheckoutDeliveryBilling(selectedOption[0].price);
                  //
                  setCheckoutValue({
                    firstStepComplete: true,
                    secondStepComplete: true,
                    thirdStepComplete: true,
                  });
                }}
              >
                Continue to payment
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* CONTAINER RIGHT */}
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
        </div>
        {/*  */}
        <CartInfo />
      </div>
    </div>
  );
};

export default CheckoutPhaseTwo;
