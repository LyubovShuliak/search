import React from "react";
import "./HeaderNavigation.scss";
import { ReactComponent as IntLogo } from "../../assets/images/connect.svg";
import CheckMark  from "../../assets/images/check-mark.svg";
const Header = () => {
  
  return (
    <nav>
      <div className="top_menu">
        <p>Соискатель</p>
        <p className="active">Роботодатель</p>
        <p>HR</p>
      </div>
      <div className="settings ">
        <div className="language">
          <IntLogo />
          <select name="select">
            <option value="RU">RU</option>
            <option value="ENG" selected>
              ENG
            </option>
            <option value="UA">UA</option>
          </select>
          <img src={CheckMark} alt="" />

        </div>
        <a href="#">Войти</a>
      </div>
    </nav>
  );
};

export default Header;
