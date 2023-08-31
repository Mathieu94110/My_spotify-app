import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import apiUserRequest from "../../api/api.user";

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
  userInfos: {},
  lastActivityList: [],
  isUserLoggedIn: false,
  isLoading: false,
  error: null,
});

export const getUserProfile = createAsyncThunk(
  "user/getUser",
  async (token) => {
    const response = await apiUserRequest.setUserProfileAsync(token);
    return response;
  }
);

export const getUserRecentlyPlayed = createAsyncThunk(
  "user/getRecentlyPlayed",
  async () => {
    const response = await apiUserRequest.getLastActivity();
    console.log(response);
    return response;
  }
);

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUserInfos(state, action) {
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated in getUserProfile and getUserRecentlyPlayed
    builder
      .addMatcher(isAnyOf(getUserProfile.pending), (state, action) => {
        state.isLoading = true;
      }) // Pass the generated action creators to `.addMatcher()`
      .addMatcher(isAnyOf(getUserProfile.fulfilled), (state, action) => {
        state.userInfos = action.payload;
        state.isLoading = false;
        state.isUserLoggedIn = true;
        state.error = false;
      })
      .addMatcher(isAnyOf(getUserProfile.rejected), (state, action) => {
        console.log(JSON.stringify(state), action);
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getUserRecentlyPlayed.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getUserRecentlyPlayed.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lastActivityList = action.payload;
      })
      .addMatcher(isAnyOf(getUserRecentlyPlayed.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const { setUserInfos } = userSlice.actions;

export default userSlice.reducer;

//Selectors
export const selectUserInfos = (state) => state.user.userInfos;
export const selectIsUserLoggedIn = (state) => state.user.isUserLoggedIn;
export const selectRecentlyPlayed = (state) => state.user.lastActivityList;
export const selectUserIsLoading = (state) => state.user.isLoading;
