import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import { GiCrossMark } from "react-icons/gi/index";

import sampleImage from "../../cms/images-slider/image-06.jpg";
import cartIcon from "../../cms/icons/cart.svg";

import { shoppingCart } from "../../atoms/shopping-cart";
import { checkoutSpecifics } from "../../atoms/checkout-page";

import styles from "../../styles/ShoppingCartComponents/ShoppingCartNavbar/main.module.css";

const styleCartModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "white",
  boxShadow: 12,
  borderRadius: 4,
  p: 4,
  outline: "none",
};

function ShoppingCartNavbar() {
  const router = useRouter();

  const [shoppingCartValue, setShoppingCart] = useRecoilState(shoppingCart);
  const setCheckoutSpecifics = useSetRecoilState(checkoutSpecifics);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [totalBilling, setTotalBilling] = useState(0);

  function calculateBill() {
    let allPrices = shoppingCartValue.map((ele) => +ele.price);
    let totalBill = allPrices.reduce((prev, curr) => prev + curr, 0);
    setTotalBilling(+totalBill);
    return +totalBill;
  }

  useEffect(() => {
    calculateBill();
    let allPrices = shoppingCartValue.map((ele) => +ele.price);
    let totalBill = allPrices.reduce((prev, curr) => prev + curr, 0);
    setCheckoutSpecifics((value) => {
      return {
        totalProductBilling: +totalBill,
        protectionBilling: +value.protectionBilling,
      };
    });
  });

  return (
    <div className={styles.main}>
      <div className={styles.submain} onClick={handleOpen}>
        <Image src={cartIcon} width={23} height={23}></Image>
        <p>${totalBilling.toFixed(2)}</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <Box className={styles.styleCartModal}>
            <div className={styles.cart_container}>
              <h2 className={styles.cart_heading}>Added to cart</h2>

              <div className={styles.products_list}>
                {/*  */}
                {shoppingCartValue.map((ele, ind, arr) => {
                  function removeFromCart() {
                    let oldCart = shoppingCartValue.slice();
                    oldCart.splice(ind, 1);
                    setShoppingCart(oldCart);
                  }

                  return (
                    <div className={styles.product} key={ind + Math.random()}>
                      <div className={styles.product_image}>
                        <Image
                          src={ele.img}
                          alt="product-image"
                          layout="fill"
                        />
                      </div>
                      <div className={styles.product_details}>
                        <div>
                          <h2>${ele.price}</h2>
                          <label>{ele.name}</label>
                        </div>
                        <div
                          className={styles.remove_from_cart_icon}
                          onClick={removeFromCart}
                        >
                          <GiCrossMark />
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/*  */}
              </div>

              <h3 className={styles.cart_status}>
                You have{" "}
                <div style={{ display: "inline", color: "#f47428" }}>
                  {shoppingCartValue.length}
                </div>{" "}
                items added in your cart
              </h3>

              <div className={styles.cart_total}>
                <p>Total:</p>
                <h2>${totalBilling.toFixed(2)}</h2>
              </div>

              <div className={styles.cart_actions}>
                <button onClick={handleClose}>Continue Shopping</button>
                <button
                  onClick={() => {
                    router.push("/checkout");
                  }}
                >
                  Check Out
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ShoppingCartNavbar;
