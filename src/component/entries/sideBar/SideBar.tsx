import React from "react";
import style from "./SideBar.module.css";
import home from "../../../assets/home.png";
import insights from "../../../assets/insights.png";
import favorites from "../../../assets/favorites.png";
import entries from "../../../assets/entries.png";
import settings from "../../../assets/settings.png";
import feedback from "../../../assets/feedback.png";
import help from "../../../assets/help.png";

export default function SideBar() {
  return (
    <div className={style.sadiBar}>
      <div className={style.sideNav}>
        <span>
          <img src={home} />
          Home
        </span>
        <span>
          <img src={entries} />
          Entries
        </span>
        <span>
          <img src={favorites} />
          Favorites
        </span>
        <span>
          <img src={insights} />
          Insights
        </span>
        <span>
          <img src={settings} />
          Settings
        </span>
      </div>
      <div className={style.sideFeed}>
        <span><img src={feedback}/>Feedback</span>
        <span><img src={help}/>Help</span>
      </div>
      <div className={style.sideSpan}>
        <span className={style.sideSpanFirst}>New Entry</span>
        <span className={style.sideSpanLast}>New Favorite</span>
      </div>
    </div>
  );
}
