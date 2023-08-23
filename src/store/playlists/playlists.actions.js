import apiUserPlaylistsRequest from "../../api/api.playlists";

export const REQUEST_GET_PLAYLISTS = "request get user playlists";
export const FETCH_USER_PLAYLISTS_SUCCESS =
  "request fetch user playlists success";
export const FETCH_USER_PLAYLIST_ITEMS_SUCCESS =
  "request fetch user playlist items success";
export const FETCH_USER_PLAYLISTS_ERROR = "request fetch user playlists error";
export const FETCH_USER_PLAYLIST_ITEMS_ERROR =
  "request fetch user playlist items error";
export const REQUEST_POST_PLAYLIST = "request post user playlist";
export const POST_USER_PLAYLIST_SUCCESS = "request post user playlist success";
export const POST_USER_PLAYLIST_ERROR = "request post user playlist error";
export const TRACK_TO_PLAYLIST_ACTION_SUCCESS =
  "request post track to user playlist success";
export const TRACK_TO_PLAYLIST_ACTION_ERROR =
  "request post track to user playlist error";
export const REQUEST_FETCH_PLAYLIST_IS_LOADING =
  "request fetch playlist is loading";
export const SET_PLAYLIST_PLAYING_INDEX =
  "request set current playlist playing index";
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

export const setPlaylistPlayingIndexActionSuccess = (index) => ({
  type: SET_PLAYLIST_PLAYING_INDEX,
  index,
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

export const setPlayingIndex = (index) => (dispatch) =>
  dispatch(setPlaylistPlayingIndexActionSuccess(index));
