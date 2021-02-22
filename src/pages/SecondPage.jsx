import React from "react";

import TableControllLine from "../features/table-controller/TableControllLine";

import "./secondPage.scss";

const SecondPage = () => {
  return (
    <div className="second">
      <div className="second__header">
        <h1 className="second__title">Star wars</h1>
        <p className="second__subtitle">Star wars heroes from swapi api</p>
      </div>
      <TableControllLine />
    </div>
  );
};

export default SecondPage;
