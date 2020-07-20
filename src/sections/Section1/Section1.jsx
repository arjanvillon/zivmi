import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "sections/Section1/Section1.styles.css";
import { SmallCard } from "components/Card/Card";

export const Section1 = () => {
  const details = [
    {
      id: 1,
      number: "0%",
      title: "No Fee",
      text:
        "Save when you spend around the World. There's no fee. Don't need interruption",
    },
    {
      id: 2,
      number: "5%",
      title: "Zivmi Points",
      text:
        "Earn hundreds of Zivmi points everytime you pay. You can use these points in cafes, malls, petrol stations and more.",
    },
    {
      id: 3,
      number: "300K",
      title: "Trusted by",
      text:
        "So far, we have worked with 300 thousand customers and all of them continue to use it with pleasure.",
    },
  ];

  return (
    <section id="section1">
      <h2 className="title">The key stuff you'd want to know about app</h2>

      <div className="small-cards">
        {details.map((detail) => {
          const { id, number, title, text } = detail;
          return (
            <ScrollAnimation
              animateIn="fadeInUp"
              duration={id}
              delay={250 * id}
              animateOnce={true}
            >
              <SmallCard
                key={id}
                number={number}
                title={title}
                description={text}
              />
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
};
