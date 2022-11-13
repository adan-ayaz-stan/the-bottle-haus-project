import stylesTop from "../../styles/CheckoutPageComponents/CheckoutPhaseOne/main-top.module.css";
import stylesBottom from "../../styles/CheckoutPageComponents/CheckoutPhaseOne/main-bottom.module.css";
import { TextField } from "@mui/material";

const CheckoutPhaseOne = () => {
  return (
    <div className={stylesTop.main}>
      {/* TOP SECTION */}
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

      {/* BOTTOM SECTION */}

      <div className={stylesBottom.submain_bottom}>
        {/* LEFT SIDE */}
        <div className={stylesBottom.personal_details}>
          <div className={stylesBottom.heading}>
            <p>2</p>
            <p>Shipping Address</p>
          </div>

          <form className={stylesBottom.form}>
            <div>
              <TextField
                id="filled-basic"
                label="First Name"
                variant="filled"
                classes={{
                  root: stylesBottom.text_field,
                }}
              />
              <TextField id="filled-basic" label="Last Name" variant="filled" />
            </div>
            <TextField
              id="filled-basic"
              label="Company (optional)"
              variant="filled"
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Address"
              variant="filled"
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Apartment, Suite etc. (optional)"
              variant="filled"
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="City"
              variant="filled"
              fullWidth
            />
            <div>
              <TextField id="filled-basic" label="Country" variant="filled" />
              <TextField id="filled-basic" label="State" variant="filled" />
              <TextField id="filled-basic" label="ZIP code" variant="filled" />
            </div>
            <TextField
              id="filled-basic"
              label="Phone number for updates and exclusive offers"
              variant="filled"
              fullWidth
            />

            <div>
              <button className={stylesBottom.return_to_cart_button}>
                Return to cart
              </button>
              <button className={stylesBottom.continue_to_shipping_button}>
                Continue to shipping
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className={stylesBottom.cart_details}>
          <div className={stylesBottom.cart_info}>
            <p>1 item</p>
            <button>Edit</button>
          </div>
          <div className={stylesBottom.product_listing}>
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
            <h2>$122.85</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPhaseOne;
