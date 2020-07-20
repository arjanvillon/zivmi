import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "components/Title/Title.styles.css";

export const Title = ({ title, subtitle, isContact }) => {
  return (
    <div className={`title ${isContact ? "white" : null}`}>
      <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
        <h3>{title}</h3>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        duration={1}
        delay={500}
        animateOnce={true}
      >
        <h2>{subtitle}</h2>
      </ScrollAnimation>
    </div>
  );
};
