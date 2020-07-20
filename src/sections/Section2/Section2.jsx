import React from "react";
import "sections/Section2/Section2.styles.css";
import phone3 from "assets/images/phone3x2.png";
import { SectionContent } from "components/SectionContent/SectionContent";

export const Section2 = () => {
  return (
    <section id="section2">
      <div className="rewards-sample">
        <div className="square">
          <img src={phone3} alt="phone3" />
        </div>
      </div>
      <div className="rewards">
        <SectionContent
          title="Rewards"
          subtitle="Use Zivmi Points In Over 500 Shops and Malls"
          btnType="btn-accent btn-long"
          btnText="EXPLORE"
        >
          You can shop from the most famous shops and malls in the world. With
          the Zivmi application, you can spend your points in more than 500
          shops
        </SectionContent>
      </div>
    </section>
  );
};
