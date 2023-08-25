import apiUserPlaylistsRequest from "../../api/api.playlists";

export const REQUEST_GET_USER_PLAYLISTS = "request get user playlists";
export const GET_USER_PLAYLISTS_SUCCESS =
  "request fetch user playlists success";
export const GET_USER_PLAYLIST_ITEMS_SUCCESS =
  "request fetch user playlist items success";
export const GET_USER_PLAYLISTS_ERROR = "request fetch user playlists error";
export const GET_USER_PLAYLIST_ITEMS_ERROR =
  "request fetch user playlist items error";
export const POST_USER_PLAYLIST = "request post user playlist";
export const POST_USER_PLAYLIST_SUCCESS = "request post user playlist success";
export const POST_USER_PLAYLIST_ERROR = "request post user playlist error";
export const TRACK_TO_PLAYLIST_ACTION =
  "request add or remove track to playlist";
export const TRACK_TO_PLAYLIST_ACTION_SUCCESS =
  "request post track to user playlist success";
export const TRACK_TO_PLAYLIST_ACTION_ERROR =
  "request post track to user playlist error";
export const GET_USER_PLAYLIST_IS_LOADING = "request fetch playlist is loading";
export const SET_PLAYLIST_PLAYING_INDEX =
  "request set current playlist playing index";
export const SET_IS_PLAYING_ACTION = "request set is playing status";

export const getUserPlaylistsAction = () => ({
  type: REQUEST_GET_USER_PLAYLISTS,
});

export const getUserPlaylistsActionSuccess = (userPlaylists) => ({
  type: GET_USER_PLAYLISTS_SUCCESS,
  userPlaylists,
});
export const getUserPlaylistsActionError = (error) => ({
  type: GET_USER_PLAYLISTS_ERROR,
  error,
});

export const getUserPlaylistItemsAction = () => ({
  type: GET_USER_PLAYLIST_IS_LOADING,
});

export const getUserPlaylistItemsActionSuccess = (items) => ({
  type: GET_USER_PLAYLIST_ITEMS_SUCCESS,
  items,
});
export const getUserPlaylistItemsActionError = (error) => ({
  type: GET_USER_PLAYLIST_ITEMS_ERROR,
  error,
});

export const postUserPlaylistAction = () => ({
  type: POST_USER_PLAYLIST,
});

export const postUserPlaylistsActionSuccess = () => ({
  type: POST_USER_PLAYLIST_SUCCESS,
});

export const postUserPlaylistsActionError = (error) => ({
  type: POST_USER_PLAYLIST_ERROR,
  error,
});

export const trackToUserPlaylistActions = () => ({
  type: TRACK_TO_PLAYLIST_ACTION,
});

export const trackToUserPlaylistActionSuccess = () => ({
  type: TRACK_TO_PLAYLIST_ACTION_SUCCESS,
});

export const trackToUserPlaylistActionError = (error) => ({
  type: TRACK_TO_PLAYLIST_ACTION_ERROR,
  error,
});

export const setPlaylistPlayingIndexAction = (index) => ({
  type: SET_PLAYLIST_PLAYING_INDEX,
  index,
});
export const setIsPlayingAction = (value) => ({
  type: SET_IS_PLAYING_ACTION,
  value: value,
});

export const getPlaylists = () => (dispatch) => {
  dispatch(getUserPlaylistsAction());
  return apiUserPlaylistsRequest.getUserPlaylists().then(
    (userPlaylists) => dispatch(getUserPlaylistsActionSuccess(userPlaylists)),
    (error) => dispatch(getUserPlaylistsActionError(error))
  );
};
export const getPlaylistItems = (id) => (dispatch) => {
  dispatch(getUserPlaylistItemsAction());
  return apiUserPlaylistsRequest.getUserPlaylistItems(id).then(
    (items) => dispatch(getUserPlaylistItemsActionSuccess(items)),
    (error) => dispatch(getUserPlaylistItemsActionError(error))
  );
};
export const createPlaylist = (value) => (dispatch) => {
  dispatch(postUserPlaylistAction());
  return apiUserPlaylistsRequest.createUserPlaylist(value).then(
    () => dispatch(postUserPlaylistsActionSuccess()),
    (error) => dispatch(postUserPlaylistsActionError(error))
  );
};
export const addTrackToPlaylist = (infos) => (dispatch) => {
  dispatch(trackToUserPlaylistActions());
  return apiUserPlaylistsRequest.addTrackToPlaylist(infos).then(
    () => dispatch(trackToUserPlaylistActionSuccess()),
    (error) => dispatch(trackToUserPlaylistActionError(error))
  );
};
export const removeTrackFromPlaylist = (infos) => (dispatch) => {
  dispatch(trackToUserPlaylistActions());
  return apiUserPlaylistsRequest.deleteTrackFromPlaylist(infos).then(
    () => dispatch(trackToUserPlaylistActionSuccess()),
    (error) => dispatch(trackToUserPlaylistActionError(error))
  );
};

export const setIsPlaying = (value) => (dispatch) =>
  dispatch(setIsPlayingAction(value));

export const setPlayingIndex = (index) => (dispatch) =>
  dispatch(setPlaylistPlayingIndexAction(index));
