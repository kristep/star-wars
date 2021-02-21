import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import HeaderTabs from "./header-navigation/HeaderTabs";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
      </div>
      <div className="header__right">
        <HeaderTabs />
        <User className="header__user-icon" />
      </div>
    </header>
  );
};

export default Header;