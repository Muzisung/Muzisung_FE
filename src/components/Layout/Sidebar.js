import React from "react";
import Styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={Styles.Sidebar}>
      <ul>
        <li>
          <a href="/">
            <span className={Styles.title}>Home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className={Styles.title}>Classes</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className={Styles.title}>Login</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className={Styles.title}>Test</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
