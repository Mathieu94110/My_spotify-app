import { createSelector } from 'reselect';

export const authSelector = (state) => state.authentication;

export const selectAccessToken = createSelector(
  [authSelector],
  (state) => state.tokenInfos.token
);

export const selectTokenExpiryDate = createSelector(
  [authSelector],
  (state) => state.tokenInfos.expires
);
