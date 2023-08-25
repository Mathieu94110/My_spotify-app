import { createSelector } from "reselect";

export const getUserPLaylistsSelector = (state) => state.playlists;

export const getPlaylistsIsLoadingSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.isLoading
);

export const getPlaylistsSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.data
);
export const getPlaylistItemsSelector = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.tracks
);
export const getPlaylistPLayingIndex = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.playingIndex
);
export const getIsPlaying = createSelector(
  [getUserPLaylistsSelector],
  (playlists) => playlists.isPlaying
);
