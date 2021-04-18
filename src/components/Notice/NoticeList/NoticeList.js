import React from "react";
import Styles from "./NoticeList.module.scss";

import NoticeListItem from "./NoticeListItem";

function NoticeList({ notices }) {
  const noticeItems = notices.map((notice, index) => {
    return <NoticeListItem key={index} listItems={notice} />;
  });

  return <ul className={Styles.NoticeList}>{noticeItems}</ul>;
}

export default NoticeList;
