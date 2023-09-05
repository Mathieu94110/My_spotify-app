import { getHashParams } from "./hashUtils";

const normalHash =
  "#access_token=BQDok8Y_5DXOvP_NuHYvabDoVllgiCWPFd_7vrcF6Yhhxtr6jdNsedH9KxYc1ZnC4yoDLcWW-WazQnHVA-OXhVC-VlCd23rD_NkJEY-zrryiOat_LEw19F-0plCRvbXoYxklU3jNJuYWFPmYo3tvb3wAeRLJqIJ0xpqYdF8zFneATOaY_HGKM9K128wl7Swf_SU-AOTx9o2yCLasM56-_D7bkL6BOGZZ7VNz7cYZTQQ8y2jAK9uILFgt19VGSyrCTE7fQ-haQ3K6Zjk3S2Xo5pXdvrktpaYUMfd1mT3LUMkAZOzh0lxy4Q9BGpKVe_4gMwTv1K&token_type=Bearer&expires_in=3600";
const normalExpectedResult = {
  access_token:
    "BQDok8Y_5DXOvP_NuHYvabDoVllgiCWPFd_7vrcF6Yhhxtr6jdNsedH9KxYc1ZnC4yoDLcWW-WazQnHVA-OXhVC-VlCd23rD_NkJEY-zrryiOat_LEw19F-0plCRvbXoYxklU3jNJuYWFPmYo3tvb3wAeRLJqIJ0xpqYdF8zFneATOaY_HGKM9K128wl7Swf_SU-AOTx9o2yCLasM56-_D7bkL6BOGZZ7VNz7cYZTQQ8y2jAK9uILFgt19VGSyrCTE7fQ-haQ3K6Zjk3S2Xo5pXdvrktpaYUMfd1mT3LUMkAZOzh0lxy4Q9BGpKVe_4gMwTv1K",
  token_type: "Bearer",
  expires_in: "3600",
};

const withoutExpiresInHash =
  "#access_token=BQDok8Y_5DXOvP_NuHYvabDoVllgiCWPFd_7vrcF6Yhhxtr6jdNsedH9KxYc1ZnC4yoDLcWW-WazQnHVA-OXhVC-VlCd23rD_NkJEY-zrryiOat_LEw19F-0plCRvbXoYxklU3jNJuYWFPmYo3tvb3wAeRLJqIJ0xpqYdF8zFneATOaY_HGKM9K128wl7Swf_SU-AOTx9o2yCLasM56-_D7bkL6BOGZZ7VNz7cYZTQQ8y2jAK9uILFgt19VGSyrCTE7fQ-haQ3K6Zjk3S2Xo5pXdvrktpaYUMfd1mT3LUMkAZOzh0lxy4Q9BGpKVe_4gMwTv1K&token_type=Bearer";
const withoutExpiresInResult = {
  access_token:
    "BQDok8Y_5DXOvP_NuHYvabDoVllgiCWPFd_7vrcF6Yhhxtr6jdNsedH9KxYc1ZnC4yoDLcWW-WazQnHVA-OXhVC-VlCd23rD_NkJEY-zrryiOat_LEw19F-0plCRvbXoYxklU3jNJuYWFPmYo3tvb3wAeRLJqIJ0xpqYdF8zFneATOaY_HGKM9K128wl7Swf_SU-AOTx9o2yCLasM56-_D7bkL6BOGZZ7VNz7cYZTQQ8y2jAK9uILFgt19VGSyrCTE7fQ-haQ3K6Zjk3S2Xo5pXdvrktpaYUMfd1mT3LUMkAZOzh0lxy4Q9BGpKVe_4gMwTv1K",
  token_type: "Bearer",
};

describe("getHashParams test case", () => {
  test("should firstHash return firstExpectedResult", () => {
    expect(getHashParams(normalHash)).toEqual(normalExpectedResult);
  });
  test("should withoutExpiresInHash return withoutExpiresInResult", () => {
    expect(getHashParams(withoutExpiresInHash)).toEqual(withoutExpiresInResult);
  });
});
