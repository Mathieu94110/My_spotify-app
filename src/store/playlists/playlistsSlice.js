import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import apiUserPlaylistsRequest from "../../api/api.playlists";

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
  playlists: [],
  tracks: [],
  playingIndex: 0,
  isPlaying: false,
  isLoading: false,
  error: false,
});

export const getPlaylists = createAsyncThunk(
  "playlists/getPlaylists",
  async () => {
    const response = await apiUserPlaylistsRequest.getUserPlaylists();
    console.log(response);
    return response;
  }
);

export const getPlaylistItems = createAsyncThunk(
  "playlists/getPlaylistItems",
  async (id) => {
    const response = await apiUserPlaylistsRequest.getUserPlaylistItems(id);
    console.log(response);
    return response;
  }
);

export const createPlaylist = createAsyncThunk(
  "playlists/createPlaylist",
  async (value) => {
    const response = await apiUserPlaylistsRequest.createUserPlaylist(value);
    console.log(response);
    return response;
  }
);

export const addTrackToPlaylist = createAsyncThunk(
  "playlists/addTrackToPlaylist",
  async (infos) => {
    const response = await apiUserPlaylistsRequest.addTrackToPlaylist(infos);
    console.log(response);
    return response;
  }
);

export const removeTrackFromPlaylist = createAsyncThunk(
  "playlists/removeTrackFromPlaylist",
  async (infos) => {
    const response = await apiUserPlaylistsRequest.deleteTrackFromPlaylist(
      infos
    );
    console.log(response);
    return response;
  }
);

export const playlistsSlice = createSlice({
  initialState,
  name: "playlists",
  reducers: {
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setPlayingIndex(state, action) {
      state.playingIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated in getUserProfile and getUserRecentlyPlayed
    builder
      .addMatcher(isAnyOf(getPlaylists.pending), (state, action) => {
        state.isLoading = true;
      }) // Pass the generated action creators to `.addMatcher()`
      .addMatcher(isAnyOf(getPlaylists.fulfilled), (state, action) => {
        state.playlists = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(isAnyOf(getPlaylists.rejected), (state, action) => {
        state.error = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getPlaylistItems.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getPlaylistItems.fulfilled), (state, action) => {
        state.tracks = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(isAnyOf(getPlaylistItems.rejected), (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addMatcher(isAnyOf(createPlaylist.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(createPlaylist.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(isAnyOf(createPlaylist.rejected), (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addMatcher(isAnyOf(addTrackToPlaylist.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(addTrackToPlaylist.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(isAnyOf(addTrackToPlaylist.rejected), (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addMatcher(isAnyOf(removeTrackFromPlaylist.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(removeTrackFromPlaylist.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(removeTrackFromPlaylist.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = true;
        }
      );
  },
});
export const { setIsPlaying, setPlayingIndex } = playlistsSlice.actions;

export default playlistsSlice.reducer;

//Selectors
export const selectUserPlaylists = (state) => state.playlists.playlists;
export const selectIsPlaylistsLoading = (state) => state.playlists.isLoading;
export const selectIsPlaying = (state) => state.playlists.isPlaying;
export const selectUserPlaylistsTracks = (state) => state.playlists.tracks;
export const selectPlayingIndex = (state) => state.playlists.playingIndex;
