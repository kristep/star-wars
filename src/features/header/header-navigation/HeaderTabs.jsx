import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as FirstTab } from "../../../assets/icons/first-tab.svg";
import { ReactComponent as SecondTab } from "../../../assets/icons/second-tab.svg";

import "./headerTabs.scss";

function HeaderTabs() {
  const [whichActive, setWhichActive] = useState("first");
  const tabsData = [
    {
      text: "First tab",
      icon: <FirstTab className="tabs__icon tabs__icon--first" />,
      title: "first",
    },
    {
      text: "Second tab",
      icon: <SecondTab className="tabs__icon tabs__icon--second" />,
      title: "second",
    },
  ];

  const handleClick = (link) => {
    setWhichActive(link);
  };

  return (
    <nav aria-label="secondary">
      <ul className="tabs">
        {tabsData.map((item, i) => (
          <li
            key={i}
            className={classNames("tabs__item", {
              "is-active": whichActive === item.title,
            })}
          >
            <Link
              className="tabs__link"
              onClick={() => handleClick(item.title)}
            >
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderTabs;
