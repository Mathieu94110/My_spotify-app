export const REQUEST_SET_TRACK_ID = "request set track song id";
export const REQUEST_SET_TRACK_ID_SUCCESS = "request set track id success";
export const REQUEST_SET_TRACK_ID_ERROR = "request set track id error";
export const REQUEST_SET_IS_PLAYING = "request set is playing";
export const REQUEST_SET_IS_PLAYING_SUCCESS = "request set is playing success";
export const REQUEST_SET_IS_PLAYING_ERROR = "request set is playing error";

export const requestGetUserPlaylists = () => ({
  type: REQUEST_GET_PLAYLISTS,
});

export const requestGetUserPlaylistItems = () => ({
  type: REQUEST_FETCH_PLAYLIST_IS_LOADING,
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

export const postUserPlaylistsSuccess = () => ({
  type: POST_USER_PLAYLIST_SUCCESS,
});

export const postUserPlaylistsError = (error) => ({
  type: POST_USER_PLAYLIST_ERROR,
  error,
});

export const requestTrackActionToUserPlaylist = () => ({
  type: REQUEST_FETCH_PLAYLIST_IS_LOADING,
});

export const trackToPlaylistActionSuccess = () => ({
  type: TRACK_TO_PLAYLIST_ACTION_SUCCESS,
});

export const trackToPlaylistActionError = (error) => ({
  type: TRACK_TO_PLAYLIST_ACTION_ERROR,
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
    () => dispatch(postUserPlaylistsSuccess()),
    (error) => dispatch(postUserPlaylistsError(error))
  );
};
export const addTrackToPlaylist = (infos) => (dispatch) => {
  dispatch(requestTrackActionToUserPlaylist());
  return apiUserPlaylistsRequest.addTrackToPlaylist(infos).then(
    () => dispatch(trackToPlaylistActionSuccess()),
    (error) => dispatch(trackToPlaylistActionError(error))
  );
};
export const removeTrackFromPlaylist = (infos) => (dispatch) => {
  dispatch(requestTrackActionToUserPlaylist());
  return apiUserPlaylistsRequest.deleteTrackFromPlaylist(infos).then(
    () => dispatch(trackToPlaylistActionSuccess()),
    (error) => dispatch(trackToPlaylistActionError(error))
  );
};
