import React, { type MouseEventHandler } from "react";
import type { BeverageName, BeveragePrice, BeverageId } from "../types";
import "./styles.css";

type BeverageProps = {
  name: BeverageName;
  price: BeveragePrice;
  count: number;
  id: BeverageId;
  onSelect: () => void;
};

const Beverage = ({ name, price, count, onSelect, id }: BeverageProps) => {
  const onClickWrapper: MouseEventHandler = () => {
    if (typeof onSelect === "function") {
      onSelect();
    }
  };

  return (
    <button id={id} className="flexCenter beverage" onClick={onClickWrapper}>
      <span>{name}</span>
      <span>{price} yen</span>
      <div className="flexCenter counter" id={`${id}-count`}>
        {count}
      </div>
    </button>
  );
};

export default Beverage;
