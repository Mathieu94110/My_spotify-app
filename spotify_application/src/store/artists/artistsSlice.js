import { createSlice } from '@reduxjs/toolkit';

const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken');
  }
};

const initialState = {
  topUserArtist: [],
};
export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setTopUserArtist: (state, action) => {
      state.topUserArtist = action.payload;
    },
  },
});

export const { setTopUserArtist } = artistsSlice.actions;

export const selectTopUserArtist = (state) => state.artists.topUserArtist;

export default artistsSlice.reducer;
