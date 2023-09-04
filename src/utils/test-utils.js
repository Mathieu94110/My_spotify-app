import React from "react";
import { render } from "@testing-library/react";
import { setupStore } from "../store";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
