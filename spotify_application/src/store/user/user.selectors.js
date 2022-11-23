import { createSelector } from 'reselect';

export const lastActivitySelector = (state) => state.user;

export const lastActivityIsLoadingSelector = createSelector(
  [lastActivitySelector],
  (user) => user.isLoading
);

export const lastActivityListSelector = createSelector(
  [lastActivitySelector],
  (recentlyPlayed) => recentlyPlayed.data
);
