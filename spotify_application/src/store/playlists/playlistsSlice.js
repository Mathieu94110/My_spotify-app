import { createSlice } from "@reduxjs/toolkit";

const getAccessToken = () => {
  if (localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  }
};
const getUserId = () => {
  if (localStorage.getItem("userId")) {
    return localStorage.getItem("userId");
  }
};
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
  const accessToken = getAccessToken();
  const userId = getUserId();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(setPlaylistsItem(data.items));
      dispatch(setTotal(data.total));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createPlaylist = (value) => (dispatch) => {
  const { name, description } = value;
  const accessToken = getAccessToken();
  const userId = getUserId();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ name: name, description: description }),
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => {
      console.log(networkError.message);
    }
  );
};

export const addTrack = (uris) => (dispatch) => {
  const { trackUri, checkedPlaylist } = uris;
  console.log("track =", trackUri);
  console.log("playlist =", checkedPlaylist);

  const accessToken = getAccessToken();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch(`https://api.spotify.com/v1/playlists/${checkedPlaylist}/tracks`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ uris: trackUri }),
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => {
      console.log(networkError.message);
    }
  );
};

export default playlistsSlice.reducer;
