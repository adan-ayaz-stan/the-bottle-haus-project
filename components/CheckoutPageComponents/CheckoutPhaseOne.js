import { useRecoilState, useRecoilValue } from "recoil";

import { shoppingCart } from "../../atoms/shopping-cart";
import {
  checkout,
  checkoutSpecifics,
  checkoutCustomerDetails,
} from "../../atoms/checkout-page";

import { useForm } from "react-hook-form";

import styles from "../../styles/CheckoutPageComponents/CheckoutPhaseOne/main.module.css";
import CartInfo from "./miniComponents/CartInfo";

const CheckoutPhaseOne = () => {
  // ATOM FOR RENDERING
  const [checkoutValue, setCheckoutValue] = useRecoilState(checkout);

  //
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);
  const [checkoutCustomerDetailsValue, setCheckoutCustomerDetails] =
    useRecoilState(checkoutCustomerDetails);
  const checkoutSpecificsValue = useRecoilValue(checkoutSpecifics);

  // FORM VALIDATION
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setCheckoutCustomerDetails(data);
    setCheckoutValue({
      firstStepComplete: true,
      secondStepComplete: true,
      thirdStepComplete: false,
    });
  };

  return (
    <div className={styles.main}>
      {/* LEFT SIDE CONTENT */}
      <div className={styles.submain_left}>
        <div className={styles.heading}>
          <h2>Checkout</h2>
          <h2>Details</h2>
        </div>

        {/* PERSONAL INFORMATION INPUT FORM */}
        <div className={styles.personal_details}>
          <div className={styles.heading}>
            <p>2</p>
            <p>Shipping Address</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                placeholder="First Name"
                {...register("firstName", { required: true })}
                style={errors.firstName && { outline: "solid 1px red" }}
                defaultValue={`${checkoutCustomerDetailsValue.firstName}`}
              />
              <input
                placeholder="Last Name"
                {...register("lastName", { required: true })}
                style={errors.lastName && { outline: "solid 1px red" }}
                defaultValue={`${checkoutCustomerDetailsValue.lastName}`}
              />
            </div>
            <input
              placeholder="Company (Optional)"
              {...register("company")}
              style={errors.company && { outline: "solid 1px red" }}
              defaultValue={`${checkoutCustomerDetailsValue.company}`}
            />
            <input
              placeholder="Address"
              {...register("address", { required: true })}
              style={errors.address && { outline: "solid 1px red" }}
              defaultValue={`${checkoutCustomerDetailsValue.address}`}
            />
            <input
              placeholder="Apartment, Suite, etc. (Optional)"
              {...register("apartment")}
              style={errors.apartment && { outline: "solid 1px red" }}
              defaultValue={`${checkoutCustomerDetailsValue.apartment}`}
            />
            <input
              placeholder="City"
              {...register("city", { required: true })}
              style={errors.city && { outline: "solid 1px red" }}
              defaultValue={`${checkoutCustomerDetailsValue.city}`}
            />
            <div>
              <input
                placeholder="Country"
                {...register("country", { required: true })}
                style={errors.country && { outline: "solid 1px red" }}
                defaultValue={`${checkoutCustomerDetailsValue.country}`}
              />
              <input
                placeholder="State"
                {...register("state", { required: true })}
                style={errors.state && { outline: "solid 1px red" }}
                defaultValue={`${checkoutCustomerDetailsValue.state}`}
              />
              <input
                placeholder="Zip Code"
                {...register("zipCode", {
                  required: true,
                  pattern: /^[0-9]{5}(?:-[0-9]{4})?$/,
                })}
                style={errors.zipCode && { outline: "solid 1px red" }}
                defaultValue={`${checkoutCustomerDetailsValue.zipCode}`}
              />
            </div>
            <input
              placeholder="Phone Number for updates and exclusive offers"
              {...register("phone", {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              })}
              style={errors.phone && { outline: "solid 1px red" }}
              defaultValue={`${checkoutCustomerDetailsValue.phone}`}
            />

            <div>
              <button
                className={styles.return_to_cart_button}
                onClick={() => {
                  setCheckoutValue({
                    firstStepComplete: false,
                    secondStepComplete: false,
                    thirdStepComplete: false,
                  });
                }}
              >
                Return to cart
              </button>
              <button
                className={styles.continue_to_shipping_button}
                type="submit"
              >
                Continue to shipping
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className={styles.submain_right}>
        {/* INFO MINI BOX TOP RIGHT */}
        <div className={styles.account_email}>
          <p className={styles.step_number}>1</p>
          <div>
            <h3>Contact Information</h3>
            <p>John Clayes (account@gmail.com)</p>
          </div>
          <button>Edit</button>
        </div>

        {/* CART INFO RIGHT */}
        {/* RIGHT SIDE | CART INFORMATION */}
        <CartInfo />
      </div>
    </div>
  );
};

export default CheckoutPhaseOne;
