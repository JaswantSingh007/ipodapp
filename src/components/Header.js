import React from "react";
import "../App.css";
import "../lockHeader.css";

//*********Header show date, time and battery *******

function Header() {
  let currentDate = new Date();
  let d = currentDate.toDateString();
  let t = currentDate.getHours() + ":" + currentDate.getMinutes();

  return (
    <div className="header-cont">
      <time>{t}</time>
      <span>{d}</span>
      <img
        id="battery-img"
        src="https://cdn-icons-png.flaticon.com/128/3103/3103446.png"
        alt="battery"
      ></img>
    </div>
  );
}

export default Header;
