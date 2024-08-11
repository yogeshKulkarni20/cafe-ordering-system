import React from "react";
import "./styles.css";

type InvoiceProps = {
  totalItems: number;
  billingAmount: number;
};

const Invoice = ({ totalItems, billingAmount }: InvoiceProps) => {
  return (
    <div className="invoice">
      <div>Your bill</div>
      <div>Items ordered: {totalItems}</div>
      <div>Total Price: {billingAmount} yen</div>
    </div>
  );
};

export default Invoice;
