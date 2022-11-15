import { useState } from "react";

import { Checkbox } from "@mui/material";
import { BsCircle, BsCircleFill } from "react-icons/bs/index";

import styles from "../../styles/CheckoutPageComponents/CheckoutPhaseTwo/main.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckoutPhaseTwo = (props) => {
  const [upsGround, setUpsGround] = useState(true);
  const [upsNextDayAir3Days, setUpsNextDayAir3Days] = useState(false);
  const [upsNextDayAir2Days, setUpsNextDayAir2Days] = useState(false);

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
            <div className={styles.additional_service_container}>
              <Checkbox
                {...label}
                checked={upsGround}
                icon={<BsCircle />}
                checkedIcon={<BsCircleFill style={{ color: "#ebb382" }} />}
                onClick={(e) => {
                  setUpsGround(true);
                  setUpsNextDayAir3Days(false);
                  setUpsNextDayAir2Days(false);
                }}
              />
              <div className={styles.service_card}>
                <div className={styles.service_icon}></div>
                <div className={styles.service_details}>
                  <p>UPS Ground</p>
                  <p>2 Buisness Days</p>
                </div>
                <div className={styles.service_price}>$21.75</div>
              </div>
            </div>
            {/*  */}
            <div className={styles.additional_service_container}>
              <Checkbox
                {...label}
                checked={upsNextDayAir3Days}
                icon={<BsCircle />}
                checkedIcon={<BsCircleFill style={{ color: "#ebb382" }} />}
                onClick={(e) => {
                  setUpsGround(false);
                  setUpsNextDayAir3Days(true);
                  setUpsNextDayAir2Days(false);
                }}
              />
              <div className={styles.service_card}>
                <div className={styles.service_icon}></div>
                <div className={styles.service_details}>
                  <p>UPS Next Day Air</p>
                  <p>3 Buisness Days</p>
                </div>
                <div className={styles.service_price}>$25.15</div>
              </div>
            </div>
            {/*  */}
            <div className={styles.additional_service_container}>
              <Checkbox
                {...label}
                checked={upsNextDayAir2Days}
                icon={<BsCircle />}
                checkedIcon={<BsCircleFill style={{ color: "#ebb382" }} />}
                onClick={(e) => {
                  setUpsGround(false);
                  setUpsNextDayAir3Days(false);
                  setUpsNextDayAir2Days(true);
                }}
              />
              <div className={styles.service_card}>
                <div className={styles.service_icon}></div>
                <div className={styles.service_details}>
                  <p>UPS Next Day Air</p>
                  <p>2 Buisness Days</p>
                </div>
                <div className={styles.service_price}>$33.05</div>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className={styles.buttons_container}>
              <button className={styles.return_to_cart_button}>
                Return to information
              </button>
              <button className={styles.continue_to_shipping_button}>
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
            <button>Edit</button>
          </div>
        </div>
        {/*  */}
        <div className={styles.cart_details}>
          <div className={styles.cart_info}>
            <p>1 item</p>
            <button>Edit</button>
          </div>
          <div className={styles.product_listing}>
            {/* MAPPED ELEMENTS */}
            <div className={styles.product}>
              <div className={styles.product_image}></div>
              <div className={styles.product_details}>
                <h3>$53.49</h3>
                <p>Balcones Brimstone Texas</p>
              </div>
            </div>
          </div>

          <div className={styles.billing_section}>
            <div>
              <p>Subtotal</p>
              <p>$54.49</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>$20</p>
            </div>
            <div>
              <p>Taxes</p>
              <p>$2.84</p>
            </div>
          </div>

          <div className={styles.total_bill}>
            <p>Total Bill</p>
            <h2>
              <strong>$122.85</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPhaseTwo;
