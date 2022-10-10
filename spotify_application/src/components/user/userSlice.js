import { createSlice } from "@reduxjs/toolkit";
import { setLoggedIn } from "../authentication/authenticationSlice";

const initialState = {
  displayName: "",
  userId: "",
  product: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setDisplayName, setUserId, setProduct } = userSlice.actions;

export const selectDisplayName = (state) => state.user.displayName;
export const selectProduct = (state) => state.user.product;
export const userId = (state) => state.user.userId;
export const setUserProfileAsync = (accessToken) => (dispatch) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(setDisplayName(data.display_name ? data.display_name : ""));
      dispatch(setUserId(data.id));
      // we inject also userId in localStorage in order to reuse it easily
      localStorage.setItem("userId", data.id);
      dispatch(setProduct(data.product));
    })
    .catch((error) => {
      console.log(error);
      if (error) {
        if (error.status === 401) {
          dispatch(setLoggedIn(false));
        }
      }
    });
};

export default userSlice.reducer;
