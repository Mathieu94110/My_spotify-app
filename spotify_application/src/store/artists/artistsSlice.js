import { createSlice } from "@reduxjs/toolkit";

const getAccessToken = () => {
  if (localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  }
};

const initialState = {
  topUserArtist: [],
};
export const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setTopUserArtist: (state, action) => {
      state.topUserArtist = action.payload;
    },
  },
});

export const { setTopUserArtist } = artistsSlice.actions;

export const selectTopUserArtist = (state) => state.artists.topUserArtist;

export const getTop = (value) => (dispatch) => {
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
      dispatch(setTopUserArtist(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default artistsSlice.reducer;
