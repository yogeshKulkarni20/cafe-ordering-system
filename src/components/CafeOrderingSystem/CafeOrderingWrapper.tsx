import React, { useState, useMemo } from "react";
import Beverage from "../Beverage/Beverage";
import Invoice from "../Invoice/Invoice";
import { BeverageName } from "../types";
import { BEVERAGES } from "../constant";
import "./styles.css";

type OrderState = {
  [key in BeverageName]: number;
};

type PriceMap = Record<BeverageName, number>;

const DEFAULT_ORDER_STATE: OrderState = {
  Beer: 0,
  Coffee: 0,
  Coke: 0,
  Milk: 0,
  Tea: 0,
};

const CafeOrderingWrapper = () => {
  const [orderState, setOrderState] = useState<OrderState>(DEFAULT_ORDER_STATE);

  const priceMap = useMemo(() => {
    const priceMapClone: PriceMap = {
      Coffee: 0,
      Tea: 0,
      Milk: 0,
      Coke: 0,
      Beer: 0,
    };
    BEVERAGES.forEach(({ name, price }) => {
      priceMapClone[name] = price;
    });
    return priceMapClone;
  }, []);

  const onBeverageSelect = (name: BeverageName) => {
    const orderStatClone = { ...orderState };
    if (name) {
      orderStatClone[name] = orderStatClone[name] + 1;
      setOrderState(orderStatClone);
    }
  };

  const getTotalItemsOrdered = () => {
    let totalCount = 0;
    Object.entries(orderState).forEach(([beverageName, count]) => {
      totalCount += count;
    });
    return totalCount;
  };

  const getTotalBillingAmount = () => {
    let totalBillingAmount = 0;
    Object.entries(orderState).forEach(([key, count]) => {
      const beveragePrice = priceMap[key as BeverageName] || 0;
      totalBillingAmount = totalBillingAmount + beveragePrice * count;
    });
    return totalBillingAmount;
  };

  return (
    <div className="flexCenter container">
      <div className="flexCenter beverageWrapper">
        {BEVERAGES.map(({ name, price, id }) => {
          return (
            <Beverage
              key={id}
              id={id}
              onSelect={onBeverageSelect.bind(this, name)}
              name={name}
              price={price}
              count={orderState[name] || 0}
            />
          );
        })}
      </div>
      <Invoice
        totalItems={getTotalItemsOrdered()}
        billingAmount={getTotalBillingAmount()}
      />
    </div>
  );
};

export default CafeOrderingWrapper;
