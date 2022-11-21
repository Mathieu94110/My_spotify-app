import apiUserRequest from '../../conf/api.user';

export const REQUEST_LAST_ACTIVITY = 'request last activity';
export const FETCH_LAST_ACTIVITY = 'fetch last activity';
export const FETCH_LAST_ACTIVITY_SUCCESS = 'fetch last activity success';
export const FETCH_LAST_ACTIVITY_ERROR = 'fetch last activity error';

export const requestRecentActivity = () => ({
  type: REQUEST_LAST_ACTIVITY,
});

export const fetchRecentActivitySuccess = (user) => ({
  type: FETCH_LAST_ACTIVITY_SUCCESS,
  user,
});

export const fetchRecentActivityError = (error) => ({
  type: FETCH_LAST_ACTIVITY_ERROR,
  error,
});

export const getLastActivity = () => (dispatch) => {
  dispatch(requestRecentActivity());
  return apiUserRequest.getLastActivity().then(
    (user) => dispatch(fetchRecentActivitySuccess(user)),
    (error) => dispatch(fetchRecentActivityError(error))
  );
};
