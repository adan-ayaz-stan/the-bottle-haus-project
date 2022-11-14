import stylesTop from "../../styles/CheckoutPageComponents/CheckoutPhaseOne/main-top.module.css";
import stylesBottom from "../../styles/CheckoutPageComponents/CheckoutPhaseOne/main-bottom.module.css";
import { useSetRecoilState } from "recoil";

import { checkout } from "../../atoms/checkout-page";

const CheckoutPhaseOne = () => {
  const setCheckout = useSetRecoilState(checkout);

  //

  return (
    <div className={stylesTop.main}>
      {/* TOP SECTION | 1 ACCOUNT INFORMATION */}
      <div className={stylesTop.submain_top}>
        <div className={stylesTop.heading}>
          <h2>Checkout</h2>
          <h2>Details</h2>
        </div>
        <div className={stylesTop.account_email}>
          <p className={stylesTop.step_number}>1</p>
          <div>
            <h3>Contact Information</h3>
            <p>John Clayes (account@gmail.com)</p>
          </div>
          <button>Edit</button>
        </div>
      </div>

      {/* BOTTOM SECTION | ADDRESS AND CART BILLING */}

      <div className={stylesBottom.submain_bottom}>
        {/* LEFT SIDE | ADDRESS */}
        <div className={stylesBottom.personal_details}>
          <div className={stylesBottom.heading}>
            <p>2</p>
            <p>Shipping Address</p>
          </div>

          <form className={stylesBottom.form}>
            <div>
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <input placeholder="Company (Optional)" />
            <input placeholder="Address" />
            <input placeholder="Apartment, Suite, etc. (Optional)" />
            <input placeholder="City" />
            <div>
              <input placeholder="Country" />
              <input placeholder="State" />
              <input placeholder="Zip Code" />
            </div>
            <input placeholder="Phone Number for updates and exclusive offers" />

            <div>
              <button className={stylesBottom.return_to_cart_button}>
                Return to cart
              </button>
              <button
                className={stylesBottom.continue_to_shipping_button}
                onClick={setCheckout((value) => console.log(value))}
              >
                Continue to shipping
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE | CART INFORMATION */}
        <div className={stylesBottom.cart_details}>
          <div className={stylesBottom.cart_info}>
            <p>1 item</p>
            <button>Edit</button>
          </div>
          <div className={stylesBottom.product_listing}>
            {/* MAPPED ELEMENTS */}
            <div className={stylesBottom.product}>
              <div className={stylesBottom.product_image}></div>
              <div className={stylesBottom.product_details}>
                <h3>$53.49</h3>
                <p>Balcones Brimstone Texas</p>
              </div>
            </div>
          </div>

          <div className={stylesBottom.billing_section}>
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

          <div className={stylesBottom.total_bill}>
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

export default CheckoutPhaseOne;
