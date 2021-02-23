import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import HeaderTabs from "./header-navigation/HeaderTabs";
import Button from "../../components/button/Button";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__right">
        <HeaderTabs />
        <Button user>
          <User className="header__user-icon" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
