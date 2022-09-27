import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import sampleImage from "../../cms/images-slider/image-06.jpg";
import cartIcon from "../../cms/icons/cart.svg";

import { shoppingCart } from "../../atoms/shopping-cart";

import styles from "../../styles/ShoppingCartComponents/ShoppingCartNavbar/main.module.css";

const dummyData = [
  {
    name: "Balcones Brimstone Texas Oak Smoked Whiskey 750ml",
    price: 54.49,
  },
  {
    name: "Tripplek Sake Extract 50ml",
    price: 124.49,
  },
  {
    name: "Tripplek Sake Extract 75ml",
    price: 144.49,
  },
  {
    name: "Balcones Brimstone Texas Oak Smoked Whiskey 750ml",
    price: 54.49,
  },
  {
    name: "Tripplek Sake Extract 50ml",
    price: 124.49,
  },
  {
    name: "Tripplek Sake Extract 75ml",
    price: 144.49,
  },
  {
    name: "Balcones Brimstone Texas Oak Smoked Whiskey 750ml",
    price: 54.49,
  },
  {
    name: "Tripplek Sake Extract 50ml",
    price: 124.49,
  },
  {
    name: "Tripplek Sake Extract 75ml",
    price: 144.49,
  },
  {
    name: "Balcones Brimstone Texas Oak Smoked Whiskey 750ml",
    price: 54.49,
  },
  {
    name: "Tripplek Sake Extract 50ml",
    price: 124.49,
  },
  {
    name: "Tripplek Sake Extract 75ml",
    price: 144.49,
  },
];

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
  const shoppingCartItems = useRecoilValue(shoppingCart);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [totalBilling, setTotalBilling] = useState(0);

  function calculateBill() {
    let allPrices = shoppingCartItems.map((ele) => +ele.price);
    let totalBill = allPrices.reduce((prev, curr) => prev + curr, 0);
    setTotalBilling(+totalBill);
    return +totalBill;
  }

  useEffect(() => {
    calculateBill();
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
          <Box sx={styleCartModal}>
            <div className={styles.cart_container}>
              <h2 className={styles.cart_heading}>Added to cart</h2>

              <div className={styles.products_list}>
                {/*  */}
                {shoppingCartItems.map((ele, ind, arr) => {
                  return (
                    <div className={styles.product} key={ind + Math.random()}>
                      <div className={styles.product_image}>
                        <Image
                          src={sampleImage}
                          alt="product-image"
                          layout="fill"
                        />
                      </div>
                      <div className={styles.product_details}>
                        <h2>${ele.price}</h2>
                        <label>{ele.name}</label>
                      </div>
                    </div>
                  );
                })}
                {/*  */}
              </div>

              <h3 className={styles.cart_status}>
                You have{" "}
                <div style={{ display: "inline", color: "#f47428" }}>
                  {shoppingCartItems.length}
                </div>{" "}
                items added in your cart
              </h3>

              <div className={styles.cart_total}>
                <p>Total:</p>
                <h2>${totalBilling.toFixed(2)}</h2>
              </div>

              <div className={styles.cart_actions}>
                <button onClick={handleClose}>Continue Shopping</button>
                <button>Check Out</button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ShoppingCartNavbar;
