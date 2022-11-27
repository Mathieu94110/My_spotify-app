import * as actions from './authentication.actions';

export default (
  state = {
    tokenInfos: {},
  },
  action
) => {
  switch (action.type) {
    case actions.SET_USER_TOKEN_INFOS: {
      return {
        ...state,
        tokenInfos: { token: action.token, expires: action.expireDate },
      };
    }
    default:
      return state;
  }
};
