import { BEVERAGES } from "./constant";

export type Beverage = (typeof BEVERAGES)[number];
export type BeverageName = (typeof BEVERAGES)[number]["name"];
export type BeveragePrice = (typeof BEVERAGES)[number]["price"];
export type BeverageId = (typeof BEVERAGES)[number]["id"];
