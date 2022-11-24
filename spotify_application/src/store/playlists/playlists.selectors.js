import { createSelector } from 'reselect';

export const getUserPLaylistsSelector = (state) => state.getPlaylists;

export const getPlaylistsIsLoadingSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.isLoading
);

export const getPlaylistsListSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.data
);
