import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "sections/Header/Header.styles.css";
import appleButton from "assets/images/apple_button.svg";
import googleButton from "assets/images/google_button.svg";
import phone1 from "assets/images/phone1x2.png";
import phone2 from "assets/images/phone2x2.png";

export const Header = () => {
  return (
    <header>
      <div className="intro">
        <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
          <h1>Fast&Secure Money Transfer</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          duration={1}
          delay={500}
          animateOnce={true}
        >
          <p>
            With this app in hand, you'll have more money in your pocket.
            Because every time you send, spend, or receive money
            internationally, you'll pay the lowest possible price.
          </p>
        </ScrollAnimation>
        <div className="stores">
          <div className="store-1">
            <img src={appleButton} alt="apple" />
          </div>
          <div className="store-2">
            <img src={googleButton} alt="google" />
          </div>
        </div>
      </div>
      <div className="phones">
        <img src={phone1} alt="phone1" className="phone-1" />
        <img src={phone2} alt="phone2" className="phone-2" />
      </div>
    </header>
  );
};
