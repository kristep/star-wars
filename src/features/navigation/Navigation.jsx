import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  const navigationData = [
    {
      text: "First",
      link: "/",
    },
    {
      text: "Second",
      link: "/second",
    },
    {
      text: "Third",
      link: "/third",
    },
  ];

  return (
    <nav className="navigation" aria-label="primary">
      <ul className="navigation__list">
        {navigationData.map((item, i) => (
          <li key={i} className="navigation__item">
            <Link
              to={item.link}
              className={classNames("navigation__link", {
                "is-active":
                  window.location.pathname === item.link ||
                  window.location.pathname.includes(item.text.toLowerCase()),
              })}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
