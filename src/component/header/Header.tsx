import React from "react";
import style from "./Header.module.css";
import NavBar from "../navbar/NavBar";
import logo from "../../assets/logo.png";
import notification from "../../assets/notification.png";
import searcgImg from "../../assets/search.png";
import user from "../../assets/user.png";

export default function Header() {
  return (
    <header>
      <div className={style.headerDiv}>
        <img src={logo} />
        <NavBar />
        <div className={style.icon}>
          <div className={style.boxIcon}>
            <img src={notification} />
          </div>
          <div className={style.boxIcon}>
            <img src={searcgImg} />
          </div>
        </div>
        <div className={style.user}>
          <img src={user} alt="" />
        </div>
      </div>
    </header>
  );
}
