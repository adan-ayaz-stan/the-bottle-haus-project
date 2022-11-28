import React, { useState } from "react";
import { Sling as HamburgerIcon } from "hamburger-react";

import styles from "../../styles/IndexPageComponents/NavbarStyles/hamburger.module.css";
import { useSetRecoilState } from "recoil";
import { navbarSideMenuActive } from "../../atoms/navbar-side-menu";

export default function Hamburger() {
  const [hamActive, setHamActive] = useState(false);
  const setNavbarSideMenuActive = useSetRecoilState(navbarSideMenuActive);

  return (
    <div
      className={styles.main}
      style={hamActive == true ? { border: "solid 1px black" } : {}}
    >
      <HamburgerIcon
        size={20}
        direction="right"
        duration={0.3}
        distance="md"
        color="#010101"
        easing="ease-in"
        onToggle={(toggled) => {
          if (toggled) {
            setHamActive(true);
            setNavbarSideMenuActive(true);
          } else {
            setHamActive(false);
            setNavbarSideMenuActive(false);
          }
        }}
      />
    </div>
  );
}
