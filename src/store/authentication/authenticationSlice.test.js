import reducer, { setUserTokenInfos } from "./authenticationSlice";

const previousState = {};
const userInfos = {
  token:
    "BQDok8Y_5DXOvP_NuHYvabDoVllgiCWPFd_7vrcF6Yhhxtr6jdNsedH9KxYc1ZnC4yoDLcWW-WazQnHVA-OXhVC-VlCd23rD_NkJEY-zrryiOat_LEw19F-0plCRvbXoYxklU3jNJuYWFPmYo3tvb3wAeRLJqIJ0xpqYdF8zFneATOaY_HGKM9K128wl7Swf_SU-AOTx9o2yCLasM56-_D7bkL6BOGZZ7VNz7cYZTQQ8y2jAK9uILFgt19VGSyrCTE7fQ-haQ3K6Zjk3S2Xo5pXdvrktpaYUMfd1mT3LUMkAZOzh0lxy4Q9BGpKVe_4gMwTv1K",
  expireDate: "3600",
};
test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({});
});

test("should is Playing set to true", () => {
  expect(reducer(previousState, setUserTokenInfos(userInfos))).toEqual({
    authentication: {
      token:
        "BQDok8Y_5DXOvP_NuHYvabDoVllgiCWPFd_7vrcF6Yhhxtr6jdNsedH9KxYc1ZnC4yoDLcWW-WazQnHVA-OXhVC-VlCd23rD_NkJEY-zrryiOat_LEw19F-0plCRvbXoYxklU3jNJuYWFPmYo3tvb3wAeRLJqIJ0xpqYdF8zFneATOaY_HGKM9K128wl7Swf_SU-AOTx9o2yCLasM56-_D7bkL6BOGZZ7VNz7cYZTQQ8y2jAK9uILFgt19VGSyrCTE7fQ-haQ3K6Zjk3S2Xo5pXdvrktpaYUMfd1mT3LUMkAZOzh0lxy4Q9BGpKVe_4gMwTv1K",
      expires: "3600",
    },
  });
});
