import apiUserPlaylistsRequest from '../../conf/api.playlists';

export const REQUEST_GET_PLAYLISTS = 'request user playlists activity';
export const FETCH_USER_PLAYLISTS_SUCCESS = 'fetch user playlists success';
export const FETCH_USER_PLAYLISTS_ERROR = 'fetch user playlists error';

export const requestGetUserPlaylists = () => ({
  type: REQUEST_GET_PLAYLISTS,
});

export const fetchUserPlaylistsSuccess = (userPlaylists) => ({
  type: FETCH_USER_PLAYLISTS_SUCCESS,
  userPlaylists,
});

export const fetchUserPlaylistsError = (error) => ({
  type: FETCH_USER_PLAYLISTS_ERROR,
  error,
});

export const getPlaylists = () => (dispatch) => {
  dispatch(requestGetUserPlaylists());
  return apiUserPlaylistsRequest.getUserPlaylists().then(
    (userPlaylists) => dispatch(fetchUserPlaylistsSuccess(userPlaylists)),
    (error) => dispatch(fetchUserPlaylistsError(error))
  );
};

// export const fetchRecentlyPlayed = () => (dispatch) => {
//   dispatch(requestRecentActivity());
//   return apiUserRequest.getLastActivity().then(
//      (recentlyPlayed) => dispatch(fetchRecentActivitySuccess(recentlyPlayed)),
//      (error) => dispatch(fetchRecentActivityError(error))
//   );
// };

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

export const createPlaylist = (value) => (dispatch) => {
  const { name, description } = value;
  const accessToken = getAccessToken();
  const userId = getUserId();

  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + accessToken);

  return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ name: name, description: description }),
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    (networkError) => {
      console.log(networkError.message);
    }
  );
};

export const addTrackToPlaylist = (uris) => (dispatch) => {
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
      console.log(networkError.message);
    }
  );
};

export default playlistsSlice.reducer;
