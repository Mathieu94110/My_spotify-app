import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import { authenticationSlice } from "../store/authentication/authenticationSlice";
import { userSlice } from "../store/user/userSlice";
import { browseSlice } from "../store/browse/browseSlice";
import { playlistsSlice } from "../store/playlists/playlistsSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        authentication: authenticationSlice.reducer,
        user: userSlice.reducer,
        browse: browseSlice.reducer,
        playlists: playlistsSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
