import { createSelector } from 'reselect';

export const userSelector = (state) => state.user;

export const lastActivityIsLoadingSelector = createSelector(
  [userSelector],
  (user) => user.isLoading
);

export const lastActivityListSelector = createSelector(
  [userSelector],
  (recentlyPlayed) => recentlyPlayed.lastActivityList
);

export const userInfosIsLoadingSelector = createSelector(
  [userSelector],
  (user) => user.userInfosIsLoading
);

export const userInfosSelector = createSelector(
  [userSelector],
  (user) => user.userInfos
);

export const userIsLoggedIn = createSelector(
  [userSelector],
  (user) => user.isUserLoggedIn
);
