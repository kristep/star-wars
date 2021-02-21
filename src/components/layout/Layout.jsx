import React from "react";
import PropTypes from "prop-types";

import Header from "../../features/header/Header";
import Navigation from "../../features/navigation/Navigation";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
