import React from "react";
import Styles from "./NoticeCategory.module.scss";

function NoticeCategory({ categories }) {
  return (
    <ul className={Styles.CategoryList}>
      {categories.map((category, index) => {
        return (
          <li key={index} className={Styles.CategoryList__Item}>
            <button className={Styles.CategoryList__Button}>{category}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default NoticeCategory;
