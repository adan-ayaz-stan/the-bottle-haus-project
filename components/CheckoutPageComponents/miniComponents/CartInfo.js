import Image from "next/image";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { shoppingCart } from "../../../atoms/shopping-cart";
import {
  checkout,
  checkoutDeliveryBilling,
  checkoutSpecifics,
} from "../../../atoms/checkout-page";

import styles from "./cart-info.module.css";

export default function CartInfo() {
  const setCheckoutValue = useSetRecoilState(checkout);
  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);
  const checkoutSpecificsValue = useRecoilValue(checkoutSpecifics);
  const checkoutDeliveryBillingValue = useRecoilValue(checkoutDeliveryBilling);

  return (
    <div className={styles.cart_details}>
      <div className={styles.cart_info}>
        <p>{shoppingCartValue.length} item(s)</p>
        <button
          onClick={() => {
            setCheckoutValue((value) => {
              return {
                firstStepComplete: false,
                secondStepComplete: false,
                thirdStepComplete: false,
              };
            });
          }}
        >
          Edit
        </button>
      </div>
      <div className={styles.product_listing}>
        {/* MAPPED ELEMENTS */}

        {shoppingCartValue.map((ele) => {
          return (
            <div className={styles.product}>
              <div className={styles.product_image}>
                <Image src={ele.img} alt="product-image" layout="fill" />
              </div>
              <div className={styles.product_details}>
                <h3>${ele.price}</h3>
                <p>{ele.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.billing_section}>
        <div>
          <p>Subtotal</p>
          <p>${checkoutSpecificsValue.totalProductBilling}</p>
        </div>
        <div>
          <p>Protection</p>
          <p>${checkoutSpecificsValue.protectionBilling}</p>
        </div>
        {checkoutDeliveryBillingValue == 0 ? (
          ""
        ) : (
          <div>
            <p>Shipping</p>
            <p>${checkoutDeliveryBillingValue}</p>
          </div>
        )}

        <div>
          <p>Taxes</p>
          <p>
            $
            {Number(checkoutSpecificsValue.totalProductBilling * 0.17).toFixed(
              2
            )}
          </p>
        </div>
      </div>

      <div className={styles.total_bill}>
        <p>Total Bill</p>
        <h2>
          <strong>
            $
            {Number(
              +checkoutSpecificsValue.totalProductBilling * 0.17 +
                +checkoutSpecificsValue.totalProductBilling +
                checkoutSpecificsValue.protectionBilling +
                checkoutDeliveryBillingValue
            ).toFixed(2)}
          </strong>
        </h2>
      </div>
    </div>
  );
}
