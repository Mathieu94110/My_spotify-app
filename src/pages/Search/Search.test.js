import React from "react";
import Search from "./Search";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import "@testing-library/jest-dom";

const setup = () => {
  const { container } = renderWithProviders(<Search />);
  const input = screen.getByPlaceholderText("Rechercher un titre");
  const header = screen.findByRole("heading");
  return {
    input,
    header,
    ...container,
  };
};

describe("Search", () => {
  test("Uses preloaded state to render", async () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });
  it("updates on change", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "despacito" } });
    expect(input.value).toBe("despacito");
  });
});
