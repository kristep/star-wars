import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Button from "../button/Button";
import Input from "../input/Input";

import "./tableControllLine.scss";

const TableControllLine = ({ setGlobalFilter }) => {
  return (
    <div className="control-line">
      <Button large>
        <span>Add new</span>
      </Button>
      <div className="control-line__search">
        <SearchIcon className="control-line__search-icon" />
        <Input
          placeholder="search company..."
          id="search"
          visuallyHidden
          searchInput
          setGlobalFilter={setGlobalFilter}
        />
      </div>
    </div>
  );
};

TableControllLine.propTypes = {
  setGlobalFilter: PropTypes.func,
};

export default TableControllLine;
