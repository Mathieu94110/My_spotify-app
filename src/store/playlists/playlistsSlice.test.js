import reducer, { setIsPlaying, setPlayingIndex } from "./playlistsSlice";

const previousState = {
  entities: {},
  ids: [],
  playlists: [],
  tracks: [],
  playingIndex: 0,
  isPlaying: false,
  isLoading: false,
  error: false,
};

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    entities: {},
    ids: [],
    playlists: [],
    tracks: [],
    playingIndex: 0,
    isPlaying: false,
    isLoading: false,
    error: false,
  });
});

test("should is Playing set to true", () => {
  expect(reducer(previousState, setIsPlaying(true))).toEqual({
    entities: {},
    ids: [],
    playlists: [],
    tracks: [],
    playingIndex: 0,
    isPlaying: true,
    isLoading: false,
    error: false,
  });
});

test("should set playing index to 2", () => {
  expect(reducer(previousState, setPlayingIndex(2))).toEqual({
    entities: {},
    ids: [],
    playlists: [],
    tracks: [],
    playingIndex: 2,
    isPlaying: false,
    isLoading: false,
    error: false,
  });
});
