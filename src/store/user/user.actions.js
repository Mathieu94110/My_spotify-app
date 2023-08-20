import apiUserRequest from "../../api/api.user";

//User login status
export const REQUEST_FETCH_USER_INFOS = "fetch user infos";
export const FETCH_USER_INFOS_SUCCESS = "fetch user infos success";
export const FETCH_USER_INFOS_ERROR = "fetch user infos error";

export const fetchUserInfos = () => ({
  type: REQUEST_FETCH_USER_INFOS,
});

export const fetchUserInfosSuccess = (userInfos) => ({
  type: FETCH_USER_INFOS_SUCCESS,
  userInfos,
});

export const fetchUserInfosError = (error) => ({
  type: FETCH_USER_INFOS_ERROR,
  error,
});

export const getUserProfile = (accessToken) => (dispatch) => {
  dispatch(fetchUserInfos());
  return apiUserRequest.setUserProfileAsync(accessToken).then(
    (userInfos) => {
      localStorage.setItem("userId", userInfos.id);
      return dispatch(fetchUserInfosSuccess(userInfos));
    },
    (error) => dispatch(fetchUserInfosError(error))
  );
};

// User recent activity
export const REQUEST_LAST_ACTIVITY = "fetch last activity";
export const FETCH_LAST_ACTIVITY_SUCCESS = "fetch last activity success";
export const FETCH_LAST_ACTIVITY_ERROR = "fetch last activity error";

export const requestRecentActivity = () => ({
  type: REQUEST_LAST_ACTIVITY,
});

export const fetchRecentActivitySuccess = (recentlyPlayed) => ({
  type: FETCH_LAST_ACTIVITY_SUCCESS,
  recentlyPlayed,
});

export const fetchRecentActivityError = (error) => ({
  type: FETCH_LAST_ACTIVITY_ERROR,
  error,
});

export const fetchRecentlyPlayed = () => (dispatch) => {
  dispatch(requestRecentActivity());
  return apiUserRequest.getLastActivity().then(
    (recentlyPlayed) => dispatch(fetchRecentActivitySuccess(recentlyPlayed)),
    (error) => dispatch(fetchRecentActivityError(error))
  );
};
