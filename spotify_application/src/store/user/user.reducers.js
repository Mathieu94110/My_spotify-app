import * as actions from './user.actions';

export default (
  state = {
    data: [],
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_LAST_ACTIVITY: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.FETCH_LAST_ACTIVITY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [ ...action.recentlyPlayed ]
      };
    }

    case actions.FETCH_LAST_ACTIVITY_ERROR: {
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
