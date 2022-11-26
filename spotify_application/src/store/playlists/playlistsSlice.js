import { createSlice } from '@reduxjs/toolkit';

const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken');
  }
};
const getUserId = () => {
  if (localStorage.getItem('userId')) {
    return localStorage.getItem('userId');
  }
};
const initialState = {
  playlistsItems: [],
  total: 0,
};

export const playlistsSlice = createSlice({
  name: 'playlists',
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

export const addTrackToPlaylist = (uris) => {
  const { uri, id } = uris;
  const accessToken = getAccessToken();
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + accessToken);

  return fetch(
    `https://api.spotify.com/v1/playlists/${id}/tracks?uris=${uri}`,
    {
      method: 'POST',
      headers: myHeaders,
    }
  ).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    (networkError) => {
      console.error(networkError.message);
    }
  );
};

export default playlistsSlice.reducer;
