import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as FirstTab } from "../../../assets/icons/first-tab.svg";
import { ReactComponent as SecondTab } from "../../../assets/icons/second-tab.svg";

import "./headerTabs.scss";

function HeaderTabs() {
  return (
    <nav aria-label="secondary">
      <ul className="tabs">
        <li className="tabs__item is-active">
          <Link className="tabs__link">
            <FirstTab className="tabs__icon" />
            First tab
          </Link>
        </li>
        <button className="tabs__item">
          <Link className="tabs__link">
            <SecondTab className="tabs__icon" />
            Second tab
          </Link>
        </button>
      </ul>
    </nav>
  );
}

export default HeaderTabs;
