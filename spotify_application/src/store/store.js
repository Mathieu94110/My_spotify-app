import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authentication/authenticationSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    authorization: authenticationReducer,
    user: userReducer,
  },
});
