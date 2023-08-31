import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUserTokenInfos(state, action) {
      const { token, expireDate } = action.payload;
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.authentication = { token: token, expires: expireDate };
    },
  },
});

// export them as named exports from this "slice" file
export const { setUserTokenInfos } = authenticationSlice.actions;

export default authenticationSlice.reducer;

// Selectors
export const selectAccessToken = (state) => state.authentication.token;
export const selectTokenExpiryDate = (state) => state.authentication.expires;
