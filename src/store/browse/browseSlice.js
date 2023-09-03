import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import apiUserBrowseRequest from "../../api/api.browse";

const browseAdapter = createEntityAdapter();
const initialState = browseAdapter.getInitialState({
  isLoading: false,
  view: [],
  newReleasesError: false,
  categoriesError: false,
  featuredError: false,
  viewType: "New Releases",
});
//

export const getNewReleases = createAsyncThunk(
  "browse/getNewReleases",
  async () => {
    const response = await apiUserBrowseRequest.fetchNewReleases();
    return response;
  }
);

export const getCategories = createAsyncThunk(
  "browse/getCategories",
  async () => {
    const response = await apiUserBrowseRequest.fetchCategories();
    return response;
  }
);

export const getFeatured = createAsyncThunk("browse/getFeatured", async () => {
  const response = await apiUserBrowseRequest.fetchFeatured();
  return response;
});

export const browseSlice = createSlice({
  initialState,
  name: "browse",
  reducers: {
    updateCategoryType(state, action) {
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.viewType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getNewReleases.pending), (state, action) => {
        state.isLoading = true;
      }) // Pass the generated action creators to `.addMatcher()`
      .addMatcher(isAnyOf(getNewReleases.fulfilled), (state, action) => {
        state.view = action.payload;
        state.newReleasesError = false;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getNewReleases.rejected), (state, action) => {
        state.isLoading = false;
        state.newReleasesError = true;
      })
      .addMatcher(isAnyOf(getCategories.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getCategories.fulfilled), (state, action) => {
        state.isLoading = false;
        state.categoriesError = false;
        state.view = action.payload;
      })
      .addMatcher(isAnyOf(getCategories.rejected), (state, action) => {
        state.isLoading = false;
        state.categoriesError = true;
      })
      .addMatcher(isAnyOf(getFeatured.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getFeatured.fulfilled), (state, action) => {
        state.isLoading = false;
        state.view = action.payload;
        state.featuredError = false;
      })
      .addMatcher(isAnyOf(getFeatured.rejected), (state, action) => {
        state.isLoading = false;
        state.featuredError = true;
      });
  },
});
export const { updateCategoryType } = browseSlice.actions;

export default browseSlice.reducer;

//Selectors
export const selectViewType = (state) => state.browse.viewType;
export const selectView = (state) => state.browse.view;
export const selectIsBrowseLoading = (state) => state.browse.isLoading;
