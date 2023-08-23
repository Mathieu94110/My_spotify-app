import * as actions from "./playlists.actions";

export default (
  state = {
    data: [],
    tracks: [],
    playingIndex: 0,
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case (actions.REQUEST_GET_PLAYLISTS,
    actions.REQUEST_FETCH_PLAYLIST_IS_LOADING): {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.FETCH_USER_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...action.userPlaylists],
      };
    }

    case actions.FETCH_USER_PLAYLISTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    //
    case actions.FETCH_USER_PLAYLIST_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        tracks: [...action.items],
      };
    }

    case actions.FETCH_USER_PLAYLIST_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    //
    case actions.REQUEST_POST_PLAYLIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.POST_USER_PLAYLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case actions.POST_USER_PLAYLIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.TRACK_TO_PLAYLIST_ACTION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.TRACK_TO_PLAYLIST_ACTION_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.SET_PLAYLIST_PLAYING_INDEX: {
      return {
        ...state,
        playingIndex: action.index,
      };
    }

    default:
      return state;
  }
};
