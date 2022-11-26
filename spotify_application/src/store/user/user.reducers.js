import * as actions from './user.actions';

export default (
  state = {
    lastActivityList: [],
    userInfos: {},
    isLoading: false,
    userInfosIsLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.REQUEST_FETCH_USER_INFOS: {
      return {
        ...state,
        userInfosIsLoading: true,
      };
    }
    case actions.FETCH_USER_INFOS_SUCCESS: {
      return {
        ...state,
        userInfosIsLoading: false,
        error: null,
        userInfos: { ...action.userInfos },
      };
    }
    case actions.FETCH_USER_INFOS_ERROR: {
      return {
        ...state,
        userInfosIsLoading: false,
        error: action.error,
      };
    }
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
        lastActivityList: [...action.recentlyPlayed],
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
