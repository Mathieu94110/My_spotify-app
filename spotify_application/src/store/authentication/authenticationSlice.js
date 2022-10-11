import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  accessToken: "",
  tokenExpiryDate: "",
};
export const authenticationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setTokenExpiryDate: (state, action) => {
      const date = new Date();
      date.setSeconds(date.getSeconds() + action.payload);
      state.tokenExpiryDate = date.toISOString();
    },
  },
});

export const { setLoggedIn, setAccessToken, setUserId, setTokenExpiryDate } =
  authenticationSlice.actions;

export const selectIsLoggedIn = (state) => state.authorization.loggedIn;
export const selectAccessToken = (state) => state.authorization.accessToken;
export const selectTokenExpiryDate = (state) =>
  state.authorization.tokenExpiryDate;

export default authenticationSlice.reducer;
