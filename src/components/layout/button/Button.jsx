import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import "./button.scss";

const Button = (props) => {
  const { children, type = "button", large } = props;
  const buttonClass = classNames({
    button: true,
    "button--large": large,
  });

  return (
    <button type={type} className={buttonClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  large: PropTypes.bool,
};

export default Button;
