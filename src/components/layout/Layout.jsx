import React from "react";
import PropTypes from "prop-types";

import Header from "../../features/header/Header";
import Navigation from "../../features/navigation/Navigation";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__page">
        <Navigation />
        <main className="layout__content">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
