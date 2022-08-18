import Image from "next/image";
import React from "react";

import styles from "../../styles/IndexPageComponents/NavbarStyles/nav-main.module.css";
import logo from "../../cms/logo.svg";
import searchIcon from "../../cms/icons/search.svg";
import cartIcon from "../../cms/icons/cart.svg";
import profileIcon from "../../cms/icons/profile.svg";
import Hamburger from "./Hamburger";

export default function Navbar() {
  return (
    <div className={styles.main}>
      {/* HAMBURGER */}
      <Hamburger />

      {/* LOGO */}

      <div className={styles.logo}>
        <Image src={logo} height={150} width={150}></Image>
      </div>

      {/* OTHER LINKS */}

      <input type="checkbox" className={styles.profileCheckbox}></input>
      <div className={styles.profile}>
        <Image src={profileIcon} width={50} height={50}></Image>
      </div>

      <div className={styles.submenu}>
        <div>
          <a href="/">Log In</a>
          <a href="/">Create Account</a>
        </div>

        <div>
          <Image src={searchIcon} width={23} height={23}></Image>
        </div>

        <div>
          <Image src={cartIcon} width={23} height={23}></Image>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  );
}
