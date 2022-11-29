import { createSelector } from 'reselect';

export const getBrowseInfos = (state) => state.browse;

export const getNewReleasesListSelector = createSelector(
  [getBrowseInfos],
  (releases) => releases.data
);