import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authentication/authenticationSlice";
import { userSlice } from "./user/userSlice";
import { browseSlice } from "./browse/browseSlice";
import { playlistsSlice } from "./playlists/playlistsSlice";
// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  // Automatically calls `combineReducers`
  reducer: {
    authentication: authenticationSlice.reducer,
    user: userSlice.reducer,
    browse: browseSlice.reducer,
    playlists: playlistsSlice.reducer,
  },
});
