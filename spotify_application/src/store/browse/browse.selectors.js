import { createSelector } from 'reselect';

export const getBrowseInfos = (state) => state.browse;

export const getBrowseCategoryListSelector = createSelector(
  [getBrowseInfos],
  (category) => category.view
);
