import * as actions from './playlists.actions';

export default (
  state = {
    data: [],
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_GET_PLAYLISTS: {
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
        data: [ ...action.userPlaylists ]
      };
    }

    case actions.FETCH_USER_PLAYLISTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
