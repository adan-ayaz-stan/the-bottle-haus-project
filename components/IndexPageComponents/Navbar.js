import Image from "next/image";
import React from "react";

import styles from "../../styles/IndexPageComponents/NavbarStyles/nav-main.module.css";
import logo from "../../cms/logo.svg";
import searchIcon from "../../cms/icons/search.svg";
import profileIcon from "../../cms/icons/profile.svg";
import Hamburger from "./Hamburger";
import ShoppingCartNavbar from "../ShoppingCartComponents/ShoppingCartNavbar";

export default function Navbar() {

  return (
    <div className={styles.main}>
      {/* HAMBURGER */}
      <Hamburger />

      {/* LOGO */}

      <a href="/" alt="logo" className={styles.logo}>
        <Image src={logo} height={150} width={150}></Image>
      </a>

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

        <ShoppingCartNavbar />
      </div>
    </div>
  );
}
