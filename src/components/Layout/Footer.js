import React from "react";
import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.Footer}>
      {/*<div>
        <ul className={Styles.Test2}>
          <li className={Styles.Test3}>
            <a href="/">test1</a>
          </li>
          <li className={Styles.Test3}>
            <a href="/">test2</a>
          </li>
        </ul>
      </div>
      */}
      {/*<div className={Styles.Who}>양준영, 이정우, 안우석, 이구협</div>*/}

      {/**
       * 프로젝트 참여한 사람들의 소개 페이지를 만들어서 링크로 걸어볼 생각. 2021/04/09
       * 그런데 은근 안볼것 같고 그냥 이름만 해도 될것 같다는 생각도 듦. 2021/04/10
       */}
      <div className={Styles.Who}>
        <div>Who We Are?</div>
        <a className={Styles.LinkWho} href="/">
          양준영
        </a>
        <a className={Styles.LinkWho} href="/">
          이정우
        </a>
        <a className={Styles.LinkWho} href="/">
          안우석
        </a>
        <a className={Styles.LinkWho} href="/">
          이구협
        </a>
      </div>

      {/**
       * a tag 쓰지 않고, 그냥 이름만 나열한 경우도 해봤음. 2021/04/11
       */}
      <div className={Styles.Who}>
        양준영 이정우 안우석 이구협
        <div className={Styles.Copyright}>© copyright Muzisung Project</div>
      </div>

      {/**
       * Coypright Muzisung Project를 나타내기 위해 작성. 2021/04/09
       * scss에 .Copyright로 스타일 해둠.
       */}
      {/*<div className={Styles.Copyright}>© copyright Muzisung Project</div>*/}

      {/**
       * Link들을 만들어서 나타내고 싶었음. 2021/04/11
       * 그런데 Copyright부분을 왼쪽으로, 아래의 부분을 오른쪽으로 두고 싶은데,, 어떻게 하는지 잘 모르겠음...ㅜ
       * scss의 .Footer에서 flex-direction을 row로 하면 링크 부분이 오른쪽으로 가긴 하는데 나머지 부분은 column으로 하고싶단 말이지...; 2021/04/11
       * ㄴ 엥 위에 우리 팀원 이름 적어둔데에 div 넣으니까 바로되노;ㅋㅋ;
       */}
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
