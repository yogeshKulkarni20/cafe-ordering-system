import React from "react";
import { render, screen } from "@testing-library/react";
import CafeOrderingWrapper from "./CafeOrderingWrapper";
import userEvent from "@testing-library/user-event";

describe("components | CafeOrderingSystem", () => {
  test("renders cafe ordering system", () => {
    render(<CafeOrderingWrapper />);
    const coffeeButton = screen.getByTestId("coffee");
    expect(coffeeButton).toBeInTheDocument();
  });

  test("shows correct count when button is clicked", () => {
    render(<CafeOrderingWrapper />);

    const coffeeButton = screen.getByTestId("coffee");
    const teaButton = screen.getByTestId("tea");
    const milkButton = screen.getByTestId("milk");

    userEvent.click(coffeeButton);
    userEvent.click(coffeeButton);
    userEvent.click(coffeeButton);
    userEvent.click(teaButton);
    userEvent.click(milkButton);

    expect(screen.getByTestId("coffee-count")).toHaveTextContent("3");
    expect(screen.getByTestId("tea-count")).toHaveTextContent("1");
    expect(screen.getByTestId("milk-count")).toHaveTextContent("1");
    expect(screen.getByTestId("beer-count")).toHaveTextContent("0");
  });

  test("shows correct billing details", () => {
    render(<CafeOrderingWrapper />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
    expect(screen.getByTestId("price")).toHaveTextContent("0 yen");

    const cokeButton = screen.getByTestId("coke");
    const beerButton = screen.getByTestId("beer");

    userEvent.click(cokeButton);
    userEvent.click(cokeButton);
    userEvent.click(cokeButton);
    userEvent.click(beerButton);
    userEvent.click(beerButton);

    expect(screen.getByTestId("count")).toHaveTextContent("5");
    expect(screen.getByTestId("price")).toHaveTextContent("1730 yen");
  });
});
