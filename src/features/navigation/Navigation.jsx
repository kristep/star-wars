import React from "react";
import classNames from "classnames";

import { Link } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  const navigationData = [
    {
      title: "First",
      link: "/",
    },
    {
      title: "Second",
      link: "/second",
    },
    {
      title: "Third",
      link: "/third",
    },
  ];

  return (
    <nav className="navigation" aria-label="primary">
      <ul className="navigation__list">
        {navigationData.map((item, i) => (
          <li
            key={i}
            className={classNames("navigation__item", {
              "is-active":
                window.location.pathname === item.link ||
                window.location.pathname.includes(item.title.toLowerCase()),
            })}
          >
            <Link to={item.link} className="navigation__link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
