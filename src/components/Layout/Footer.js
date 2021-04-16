import React from "react";
import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.Footer}>
      <div>
        <ul className={Styles.Link}>
          <li className={Styles.LinkItem}>
            <a className={Styles.Anchor} href="/">
              양준영
            </a>
          </li>
          <li className={Styles.LinkItem}>
            <a className={Styles.Anchor} href="/">
              이정우
            </a>
          </li>
          <li className={Styles.LinkItem}>
            <a className={Styles.Anchor} href="/">
              안우석
            </a>
          </li>
          <li className={Styles.LinkItem}>
            <a className={Styles.Anchor} href="/">
              이구협
            </a>
          </li>
        </ul>
        <p className={Styles.Copyright}>© copyright Muzisung Project</p>
      </div>

      <div className={Styles.Who}>
        <p>양준영 이정우 안우석 이구협</p>
        <p className={Styles.Copyright}>© copyright Muzisung Project</p>
      </div>

      <ul className={Styles.Link}>
        <li className={Styles.LinkItem}>
          <a className={Styles.Anchor} href="/">
            Home
          </a>
        </li>
        <li className={Styles.LinkItem}>
          <a className={Styles.Anchor} href="/">
            Classes
          </a>
        </li>
        <li className={Styles.LinkItem}>
          <a className={Styles.Anchor} href="http://www.dongguk.edu">
            Dongguk University
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
