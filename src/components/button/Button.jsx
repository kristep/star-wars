import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.scss";

const Button = (props) => {
  const {
    children,
    type = "button",
    handleClick,
    isDisabled,
    ariaLabel,
    large,
    pagination,
    user,
  } = props;
  const buttonClass = classNames({
    button: true,
    "button--large": large,
    "button--pagination": pagination,
    "button--user": user,
  });

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
  large: PropTypes.bool,
  pagination: PropTypes.bool,
  user: PropTypes.bool,
};

export default Button;
