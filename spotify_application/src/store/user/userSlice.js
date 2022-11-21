import { createSlice } from "@reduxjs/toolkit";
import { setLoggedIn } from "../authentication/authenticationSlice";

const getAccessToken = () => {
  if (localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  }
};

const initialState = {
  displayName: "",
  userId: "",
  product: "",
  recentlyPlayed: [],
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
    setRecentlyPlayed: (state, action) => {
      state.recentlyPlayed = action.payload;
    },
  },
});

export const { setDisplayName, setUserId, setProduct, setRecentlyPlayed } =
  userSlice.actions;

export const selectDisplayName = (state) => state.user.displayName;
export const selectProduct = (state) => state.user.product;
export const userId = (state) => state.user.userId;
export const recentActivity = (state) => state.user.recentlyPlayed;

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

export const getRecentlyPlayed = () => (dispatch) => {
  const accessToken = getAccessToken();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch("https://api.spotify.com/v1/me/player/recently-played", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setRecentlyPlayed(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default userSlice.reducer;
