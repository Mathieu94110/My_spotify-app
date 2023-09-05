import reducer, { updateCategoryType } from "./browseSlice";

const previousState = {
  entities: {},
  ids: [],
  isLoading: false,
  view: [],
  newReleasesError: false,
  categoriesError: false,
  featuredError: false,
  viewType: "New Releases",
};

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    entities: {},
    ids: [],
    isLoading: false,
    view: [],
    newReleasesError: false,
    categoriesError: false,
    featuredError: false,
    viewType: "New Releases",
  });
});

test("should is Playing set to true", () => {
  expect(reducer(previousState, updateCategoryType("Genres"))).toEqual({
    entities: {},
    ids: [],
    isLoading: false,
    view: [],
    newReleasesError: false,
    categoriesError: false,
    featuredError: false,
    viewType: "Genres",
  });
});
