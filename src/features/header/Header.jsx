import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import Button from "../../components/button/Button";

import "./header.scss";

const Header = ({ customHeaderRenderer }) => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__right">
        {customHeaderRenderer && customHeaderRenderer()}
        <Button user ariaLabel="user profile">
          <User className="header__user-icon" />
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  customHeaderRenderer: PropTypes.func,
};

export default Header;
