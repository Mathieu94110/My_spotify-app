import React from "react";
import App from "./App";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";

test("loginButton exist and have text Se connecter", async () => {
  renderWithProviders(<App />);
  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toHaveTextContent("Se connecter");
});
