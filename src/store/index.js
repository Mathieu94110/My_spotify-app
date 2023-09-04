import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authentication/authenticationSlice";
import { userSlice } from "./user/userSlice";
import { browseSlice } from "./browse/browseSlice";
import { playlistsSlice } from "./playlists/playlistsSlice";

const rootReducer = combineReducers({
  authentication: authenticationSlice.reducer,
  user: userSlice.reducer,
  browse: browseSlice.reducer,
  playlists: playlistsSlice.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),

    // Automatically calls `combineReducers`
    reducer: rootReducer,
    preloadedState,
  });
};
