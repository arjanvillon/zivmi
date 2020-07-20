import React from "react";
import "components/Input/Input.styles.css";

export const Input = ({ changed, ...props }) => {
  return <input {...props} onChange={changed} />;
};
