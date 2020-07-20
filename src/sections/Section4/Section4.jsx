import React from "react";
import "sections/Section4/Section4.styles.css";
import { Title } from "components/Title/Title";
import { Testimonial } from "components/Testimonial/Testimonial";
import person1 from "assets/images/person1.png";
import person2 from "assets/images/person2.png";
import person3 from "assets/images/person3.png";
import person4 from "assets/images/person4.png";
import person5 from "assets/images/person5.png";

export const Section4 = () => {
  const testimonials = [
    {
      id: 1,
      image: person1,
      name: "Nikki Abarca",
      text:
        "I can send money instantly whenever I want. I earn points when i send money",
    },
    {
      id: 2,
      image: person2,
      name: "Arjan Villon",
      text:
        "I can send money instantly whenever I want. I earn points when i send money",
    },
    {
      id: 3,
      image: person3,
      name: "Johny Mellow",
      text:
        "I can send money instantly whenever I want. I earn points when i send money",
    },
    {
      id: 4,
      image: person4,
      name: "Ryan Sumayao",
      text:
        "I can send money instantly whenever I want. I earn points when i send money",
    },
    {
      id: 5,
      image: person5,
      name: "Denielle Gonzales",
      text:
        "I can send money instantly whenever I want. I earn points when i send money",
    },
  ];

  return (
    <section id="section4">
      <div className="title-container">
        <Title title="Testimonial" subtitle="What People Say About Us" />
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => {
          const { id, image, name, text } = testimonial;
          return (
            <Testimonial key={id} userImg={image} name={name}>
              {text}
            </Testimonial>
          );
        })}
      </div>
    </section>
  );
};
