import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "components/SectionContent/SectionContent.styles.css";
import { Title } from "components/Title/Title";
import { Button } from "components/Button/Button";

export const SectionContent = ({
  title,
  subtitle,
  btnType,
  btnText,
  children,
}) => {
  return (
    <div className="section-content">
      <Title title={title} subtitle={subtitle} />
      <ScrollAnimation
        animateIn="fadeInUp"
        duration={1}
        delay={1000}
        animateOnce={true}
      >
        <p>{children}</p>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        duration={1}
        delay={1250}
        animateOnce={true}
      >
        <Button className={btnType}>{btnText}</Button>
      </ScrollAnimation>
    </div>
  );
};
