import * as axios from "axios";

const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
const getAccessToken = () => {
  if (localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  }
};
export default {
  fetchNewReleases: () => {
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .get("browse/new-releases")
      .then((response) => response.data.albums.items);
  },

  fetchCategories: () => {
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .get("browse/categories")
      .then((response) => response.data.categories.items);
  },

  fetchFeatured: () => {
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });
    return apiSpotify
      .get("browse/featured-playlists")
      .then((response) => response.data.playlists.items);
  },
};
