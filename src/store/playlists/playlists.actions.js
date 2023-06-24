import apiUserPlaylistsRequest from '../../conf/api.playlists';

export const REQUEST_GET_PLAYLISTS = 'request get user playlists';
export const REQUEST_GET_PLAYLIST_ITEMS = 'request get user playlist items';
export const FETCH_USER_PLAYLISTS_SUCCESS =
  'request fetch user playlists success';
export const FETCH_USER_PLAYLIST_ITEMS_SUCCESS =
  'request fetch user playlist items success';
export const FETCH_USER_PLAYLISTS_ERROR = 'request fetch user playlists error';
export const FETCH_USER_PLAYLIST_ITEMS_ERROR =
  'request fetch user playlist items error';
export const REQUEST_POST_PLAYLIST = 'request post user playlist';
export const POST_USER_PLAYLIST_SUCCESS = 'request post user playlist success';
export const POST_USER_PLAYLIST_ERROR = 'request post user playlist error';
export const POST_TRACK_TO_PLAYLIST_SUCCESS =
  'request post track to user playlist success';
export const POST_TRACK_TO_PLAYLIST_ERROR =
  'request post track to user playlist error';
export const REQUEST_POST_TRACK_TO_PLAYLIST =
  'request post track to user playlist';

export const requestGetUserPlaylists = () => ({
  type: REQUEST_GET_PLAYLISTS,
});

export const requestGetUserPlaylistItems = () => ({
  type: REQUEST_GET_PLAYLIST_ITEMS,
});

export const fetchUserPlaylistsSuccess = (userPlaylists) => ({
  type: FETCH_USER_PLAYLISTS_SUCCESS,
  userPlaylists,
});
export const fetchUserPlaylistItemsSuccess = (items) => ({
  type: FETCH_USER_PLAYLIST_ITEMS_SUCCESS,
  items,
});

export const fetchUserPlaylistsError = (error) => ({
  type: FETCH_USER_PLAYLISTS_ERROR,
  error,
});
export const fetchUserPlaylistItemsError = (error) => ({
  type: FETCH_USER_PLAYLIST_ITEMS_ERROR,
  error,
});

export const requestPostUserPlaylist = () => ({
  type: REQUEST_POST_PLAYLIST,
});

export const postUserPlaylistsSuccess = (/* createdPlaylist */) => ({
  type: POST_USER_PLAYLIST_SUCCESS,
  /*   createdPlaylist, */
});

export const postUserPlaylistsError = (error) => ({
  type: POST_USER_PLAYLIST_ERROR,
  error,
});

export const requestPostTrackToUserPlaylist = () => ({
  type: REQUEST_POST_TRACK_TO_PLAYLIST,
});

export const postTrackToPlaylistsSuccess = () => ({
  type: POST_TRACK_TO_PLAYLIST_SUCCESS,
});

export const postTrackToPlaylistsError = (error) => ({
  type: POST_TRACK_TO_PLAYLIST_ERROR,
  error,
});

export const getPlaylists = () => (dispatch) => {
  dispatch(requestGetUserPlaylists());
  return apiUserPlaylistsRequest.getUserPlaylists().then(
    (userPlaylists) => dispatch(fetchUserPlaylistsSuccess(userPlaylists)),
    (error) => dispatch(fetchUserPlaylistsError(error))
  );
};
export const getPlaylistItems = (id) => (dispatch) => {
  dispatch(requestGetUserPlaylistItems());
  return apiUserPlaylistsRequest.getUserPlaylistItems(id).then(
    (items) => dispatch(fetchUserPlaylistItemsSuccess(items)),
    (error) => dispatch(fetchUserPlaylistItemsError(error))
  );
};
export const createPlaylist = (value) => (dispatch) => {
  dispatch(requestPostUserPlaylist());
  return apiUserPlaylistsRequest.createUserPlaylist(value).then(
    (playlistCreated) => dispatch(postUserPlaylistsSuccess(playlistCreated)),
    (error) => dispatch(postUserPlaylistsError(error))
  );
};
export const addTrackToPlaylist = (infos) => (dispatch) => {
  dispatch(requestPostTrackToUserPlaylist());
  return apiUserPlaylistsRequest.addTrackToPlaylist(infos).then(
    () => dispatch(postTrackToPlaylistsSuccess()),
    (error) => dispatch(postTrackToPlaylistsError(error))
  );
};
