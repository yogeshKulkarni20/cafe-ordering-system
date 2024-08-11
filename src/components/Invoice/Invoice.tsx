import React from "react";
import "./styles.css";

type InvoiceProps = {
  totalItems: number;
  billingAmount: number;
};

const Invoice = ({ totalItems = 0, billingAmount = 0 }: InvoiceProps) => {
  return (
    <div className="invoice">
      <div>Your bill</div>
      <span className="flexCenter details" id="count">
        <span>Items ordered:</span> {totalItems}
      </span>
      <span className="flexCenter details" id="price">
        <span>Total Price:</span> {billingAmount} yen
      </span>
    </div>
  );
};

export default Invoice;
