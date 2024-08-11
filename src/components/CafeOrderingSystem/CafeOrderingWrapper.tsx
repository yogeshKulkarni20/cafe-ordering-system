import React from "react";
import Beverage from "../Beverage/Beverage";
import Invoice from "../Invoice/Invoice";
import { BeverageName } from "../types";
import { BEVERAGES } from "../constant";
import "./styles.css";

const CafeOrderingWrapper = () => {
  const onBeverageSelect = (name: BeverageName) => {};

  return (
    <div className="flexCenter container">
      <div className="flexCenter beverageWrapper">
        {BEVERAGES.map(({ name, price }) => {
          return (
            <Beverage
              onSelect={onBeverageSelect}
              name={name}
              price={price}
              count={2}
            />
          );
        })}
      </div>
      <Invoice totalItems={2} billingAmount={960} />
    </div>
  );
};

export default CafeOrderingWrapper;
