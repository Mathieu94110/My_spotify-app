export const SET_USER_TOKEN_INFOS = 'set tokens infos';

export const setTokenDetails = (token, expireDate) => ({
  type: SET_USER_TOKEN_INFOS,
  token,
  expireDate,
});

export const setTokenInfo = (token, expireDate) => (dispatch) => {
  dispatch(setTokenDetails(token, expireDate));
};
