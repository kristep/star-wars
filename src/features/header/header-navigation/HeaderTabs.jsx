import React, { useState } from "react";

import { ReactComponent as FirstTab } from "../../../assets/icons/first-tab.svg";
import { ReactComponent as SecondTab } from "../../../assets/icons/second-tab.svg";

import "./headerTabs.scss";

const HeaderTabs = () => {
  return (
    <nav>
      <ul className="tabs">
        <li className="tabs__item is-active">
          <a className="tabs__link">
            <FirstTab className="tabs__icon" />
            First tab
          </a>
        </li>
        <li className="tabs__item">
          <a className="tabs__link">
            <SecondTab className="tabs__icon" />
            Second tab
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTabs;
