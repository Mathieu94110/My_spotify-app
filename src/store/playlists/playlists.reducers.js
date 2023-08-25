import * as actions from "./playlists.actions";

export default (
  state = {
    data: [],
    tracks: [],
    playingIndex: 0,
    isPlaying: false,
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case (actions.REQUEST_GET_USER_PLAYLISTS,
    actions.GET_USER_PLAYLIST_IS_LOADING): {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.GET_USER_PLAYLISTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...action.userPlaylists],
      };
    }

    case actions.GET_USER_PLAYLISTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    //
    case actions.GET_USER_PLAYLIST_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        tracks: [...action.items],
      };
    }

    case actions.GET_USER_PLAYLIST_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    //
    case actions.POST_USER_PLAYLIST: {
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
    case actions.TRACK_TO_PLAYLIST_ACTION: {
      return {
        ...state,
        isLoading: true,
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
    case actions.SET_IS_PLAYING_ACTION: {
      return {
        ...state,
        isPlaying: action.value,
      };
    }

    default:
      return state;
  }
};
