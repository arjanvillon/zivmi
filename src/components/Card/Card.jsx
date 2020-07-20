import React from "react";
import "components/Card/Card.styles.css";

export const SmallCard = ({ number, title, description }) => {
  return (
    <div className="small-card">
      <div className="oval"></div>
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const BigCard = ({ children }) => {
  return <div className="card big-card">{children}</div>;
};
