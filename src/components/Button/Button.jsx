import React from "react";
import "components/Button/Button.styles.css";

export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
