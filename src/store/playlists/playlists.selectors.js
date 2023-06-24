import { createSelector } from 'reselect';

export const getUserPLaylistsSelector = (state) => state.playlists;

export const getPlaylistsIsLoadingSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.isLoading
);

export const getPlaylistsListSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.data
);
export const getPlaylistsItemsListSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.tracks
);
