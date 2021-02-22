import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./input.scss";

const Input = (props) => {
  const [value, setValue] = useState("");

  const {
    placeholder,
    type = "text",
    id,
    visuallyHidden,
    setGlobalFilter,
    searchInput,
  } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    setGlobalFilter && setGlobalFilter(event.target.value || undefined);
  };

  return (
    <>
      {/* eslint-disable-next-line */}
      <label
        htmlFor={id}
        className={classNames({
          input__label: true,
          "visually-hidden": visuallyHidden,
        })}
      >
        Search by any table column
      </label>
      <input
        className={classNames({
          input: true,
          "input--search": searchInput,
        })}
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  visuallyHidden: PropTypes.bool,
  searchInput: PropTypes.bool,
  setGlobalFilter: PropTypes.func,
};

export default Input;
