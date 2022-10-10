import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../components/authentication/authenticationSlice";
import userReducer from "../components/user/userSlice";

export const store = configureStore({
  reducer: {
    authorization: authenticationReducer,
    user: userReducer,
  },
});
