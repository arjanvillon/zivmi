import React from "react";
import logo from "assets/images/logo.png";
import footerLogo from "assets/images/footerlogo.png";
import "components/Logo/Logo.styles.css";

export const Logo = ({ isFooterLogo }) => {
  return (
    <img src={isFooterLogo ? footerLogo : logo} alt="zivmi" className="logo" />
  );
};
