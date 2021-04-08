import React from "react";
import Styles from "./Header.module.scss";

function Header() {
  return (
    <nav className={Styles.Header}>
      <div className={Styles.Logo}>
        <p>Muzisung</p>
      </div>

      <div className={Styles.Spacer}></div>

      <ul className={Styles.Navigation}>
        <li className={Styles.NavigationItem}>
          <a className={Styles.Anchor} href="/">
            Home
          </a>
        </li>
        <li className={Styles.NavigationItem}>
          <a className={Styles.Anchor} href="/">
            Classes
          </a>
        </li>
        <li className={Styles.NavigationItem}>
          <a className={Styles.Anchor} href="/">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
