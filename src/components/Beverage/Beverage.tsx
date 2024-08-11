import React, { type MouseEventHandler } from "react";
import type { BeverageName, BeveragePrice } from "../types";
import "./styles.css";

type BeverageProps = {
  name: BeverageName;
  price: BeveragePrice;
  count: number;
  onSelect: (name: BeverageName) => void;
};

const Beverage = ({ name, price, count, onSelect }: BeverageProps) => {
  const onClickWrapper: MouseEventHandler = () => {
    if (typeof onSelect === "function") {
      onSelect(name);
    }
  };
  return (
    <div className="flexCenter beverage" onClick={onClickWrapper}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Beverage;
