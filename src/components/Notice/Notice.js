import React, { useState } from "react";
import Styles from "./Notice.module.scss";

import NoticeList from "./NoticeList/NoticeList";
import NoticeCategory from "./NoticeCategory/NoticeCategory";

function Header() {
  const categories = ["수업/성적", "장학", "계절학기", "기타", "일반", "장학"];
  const [notices, setNotice] = useState([
    {
      index: 0,
      title: "[기타] [LINC+] 2021년도 1학기 캡스톤디자인",
      url: "http://www.naver.com",
      date: "2021-04-16",
    },
    {
      index: 1,
      title: "[기타] 4월 13일 모의토익 고사장 및 성적 확인 방법",
      url: "http://www.naver.com",
      date: "2020-04-12",
    },
    {
      index: 2,
      title: "[학적] 2021학년도 가을 조기졸업 신청 안내",
      url: "http://www.naver.com",
      date: "2020-03-17",
    },
    {
      index: 3,
      title: "[수업,성적] 2021-1학기 수강과목 취소 시행 안내",
      url: "http://www.naver.com",
      date: "2020-03-17",
    },
    {
      index: 4,
      title: "[수업,성적] 2021-1학기 학점포기(취득교과목 포기) 안내",
      url: "http://www.naver.com",
      date: "2020-03-09",
    },
  ]);

  return (
    <div className={Styles.Notice}>
      <NoticeCategory categories={categories} />

      <NoticeList notices={notices} />
    </div>
  );
}

export default Header;
