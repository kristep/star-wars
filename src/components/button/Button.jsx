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
    large,
    pagination,
  } = props;
  const buttonClass = classNames({
    button: true,
    "button--large": large,
    "button--pagination": pagination,
  });

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  large: PropTypes.bool,
  pagination: PropTypes.bool,
};

export default Button;
