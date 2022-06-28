import React, { useState } from "react";
import { Sling as HamburgerIcon } from 'hamburger-react'

import styles from '../../styles/NavbarStyles/hamburger.module.css'

export default function Hamburger() {
  
  return (
    <div className={styles.main}>
      <HamburgerIcon size={20} direction='right' duration={0.3} distance='md' color='#010101' easing='ease-in' onToggle={toggled => {
        if (toggled) {
            console.log('toggled')
          } else {
            console.log('toggled not')
        }
      }} />
    </div>
  );
}
