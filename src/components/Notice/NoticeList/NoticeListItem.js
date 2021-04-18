import React from "react";
import Styles from "./NoticeListItem.module.scss";

function NoticeListItem({ listItems }) {
  return (
    <li className={Styles.NoticeListItem}>
      <p className={Styles.NoticeListItem__Title}>{listItems.title}</p>
      <small className={Styles.NoticeListItem__Date}>{listItems.date}</small>
    </li>
  );
}

export default NoticeListItem;
