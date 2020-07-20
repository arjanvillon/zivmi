import React, { useState } from "react";
import "sections/Section5/Section5.styles.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Title } from "components/Title/Title";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";

export const Section5 = () => {
  const [email, setEmail] = useState("");

  const inputChangedHandler = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  return (
    <section id="section5">
      <Title isContact title="Contact Us" subtitle="Get In Touch With Us" />
      <ScrollAnimation
        animateIn="fadeInUp"
        duration={1}
        delay={750}
        animateOnce={true}
      >
        <p>
          Contact us immediately and have the opportunity to take advantage of
          special opportunities for you.
        </p>
      </ScrollAnimation>
      <form>
        <Input
          type="email"
          name="contact"
          placeholder="Enter your business email"
          value={email}
          changed={inputChangedHandler}
        />
        <Button className="btn-accent btn-long">Get Started</Button>
      </form>
    </section>
  );
};
