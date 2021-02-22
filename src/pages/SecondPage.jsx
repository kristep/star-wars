import React from "react";

import TableOfHeroes from "../features/table-heroes/TableOfHeroes";

import "./secondPage.scss";

const SecondPage = () => {
  return (
    <div className="second">
      <div className="second__header">
        <h1 className="second__title">Star wars</h1>
        <p className="second__subtitle">Star wars heroes from swapi api</p>
      </div>
      <TableOfHeroes />
    </div>
  );
};

export default SecondPage;
