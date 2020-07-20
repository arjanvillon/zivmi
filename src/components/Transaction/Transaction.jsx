import React, { Fragment } from "react";
import "components/Transaction/Transaction.styles.css";
import { LineBreak } from "components/LineBreak/LineBreak";

export const Transaction = ({ userImg, name, details }) => {
  return (
    <div className="transaction">
      <div className="transaction-user">
        <img src={userImg} alt={name} />
        <small>Send Money to {name}</small>
      </div>
      <div className="transaction-details">
        {details.map((detail) => {
          const { isSend, amount, flag, currency } = detail;
          return (
            <Fragment>
              <TransactionDetails
                name={name}
                isSend={isSend}
                amount={amount}
                flag={flag}
                currency={currency}
              />
              <LineBreak />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export const TransactionDetails = ({
  name,
  isSend,
  amount,
  flag,
  currency,
}) => {
  return (
    <div className="transaction-detail">
      <div className="transaction-amount">
        <p>{isSend ? "You send" : `${name} gets`}</p>
        <h4>{amount}</h4>
      </div>
      <div className="transaction-currency">
        {flag ? <img src={flag} alt={currency} /> : null}
        <h4>{currency}</h4>
      </div>
    </div>
  );
};
