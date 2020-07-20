import React from "react";
import "sections/Section3/Section3.styles.css";
import { SectionContent } from "components/SectionContent/SectionContent";
import person3 from "assets/images/person3.png";
import egyptFlag from "assets/images/egypt.svg";
import { BigCard } from "components/Card/Card";
import { Transaction } from "components/Transaction/Transaction";

export const Section3 = () => {
  const transaction = {
    name: "Johnny",
    image: person3,
    details: [
      { id: 1, isSend: true, amount: "$250", flag: "", currency: "USD" },
      {
        id: 1,
        isSend: false,
        amount: "$3.937.38",
        flag: egyptFlag,
        currency: "EGP",
      },
    ],
  };

  return (
    <section id="section3">
      <div className="payments">
        <SectionContent
          title="Payments"
          subtitle="Pay Like A Local — Get The Real Exchange Rate"
          btnType="btn-dark btn-long"
          btnText="GET STARTED"
        >
          Spend abroad in over 150 currencies at the Real (Interbank) exchange
          rates - with no hidden fees. All payments will be instantly
          transferred to the account of the person you want within seconds.
        </SectionContent>
      </div>

      <div className="payments-sample">
        <div className="circle">
          <div className="transaction-sample">
            <BigCard>
              <Transaction
                userImg={transaction.image}
                name={transaction.name}
                details={transaction.details}
              />
            </BigCard>
          </div>
        </div>
      </div>
    </section>
  );
};
