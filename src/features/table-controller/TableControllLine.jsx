import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Button from "../../components/layout/button/Button";

import "./tableControllLine.scss";

const TableControllLine = () => {
  return (
    <div className="control-line">
      <Button large>Add new </Button>
      <div className="control-line__search">
        <Button>
          <SearchIcon />
        </Button>
        <input
          className="control-line__input"
          placeholder="search company..."
        />
      </div>
    </div>
  );
};

export default TableControllLine;
