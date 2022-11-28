import { useRecoilValue } from "recoil";
import { navbarSideMenuActive } from "../../../atoms/navbar-side-menu";
import styles from "../../../styles/IndexPageComponents/NavbarStyles/navbar-side-menu.module.css";

export default function NavbarSideMenu() {
  const sideMenuActiveValue = useRecoilValue(navbarSideMenuActive);

  return (
    <div
      className={`${styles.main} ${
        sideMenuActiveValue == true ? styles.menu_active : ""
      }`}
    >
      <h2>Made for demonstration purporse</h2>
    </div>
  );
}
