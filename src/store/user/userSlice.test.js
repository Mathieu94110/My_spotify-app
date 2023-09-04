import reducer from "./userSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    // entites and ids are due to const userAdapter = createEntityAdapter() on initialState
    entities: {},
    ids: [],
    userInfos: {},
    lastActivityList: [],
    isUserLoggedIn: false,
    isLoading: false,
    error: null,
  });
});
