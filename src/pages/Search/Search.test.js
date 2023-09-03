import React from "react";
import Search from "./Search";
import { screen, fireEvent, act } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { render } from "react-dom";

const setup = () => {
  const utils = renderWithProviders(<Search />);
  const input = screen.getByPlaceholderText("Rechercher un titre");
  return {
    input,
    ...utils,
  };
};

test("Uses preloaded state to render", async () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

describe("input value", () => {
  it("updates on change", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "despacito" } });
    expect(input.value).toBe("despacito");
  });

  it("should handleChange has been called on input value change", async () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <input
        type="search"
        placeholder="Rechercher un titre"
        onChange={handleChange}
      />
    );
    const input = getByPlaceholderText("Rechercher un titre");
    const text = "stuff";
    await userEvent.type(input, text);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
