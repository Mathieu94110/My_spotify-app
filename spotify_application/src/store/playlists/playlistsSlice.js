import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlistsItems: [],
  total: 0,
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylistsItem: (state, action) => {
      state.playlistsItems = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setPlaylistsItem, setTotal } = playlistsSlice.actions;

export const selectplaylistsItems = (state) => state.playlists.playlistsItems;
export const selectplaylistsTotal = (state) => state.playlists.total;

export const getUserPlaylists = () => (dispatch) => {
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setPlaylistsItem(data.items));
      dispatch(setTotal(data.total));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default playlistsSlice.reducer;
