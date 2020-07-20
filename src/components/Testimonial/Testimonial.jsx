import React from "react";
import "components/Testimonial/Testimonial.styles.css";

export const Testimonial = ({ userImg, name, children }) => {
  return (
    <div className="testimonial">
      <img src={userImg} alt={name} />
      <div className="testimonial-text">
        <p>{children}</p>
        <h5>{name}</h5>
      </div>
    </div>
  );
};
