import * as axios from "axios";
const apiSpotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

const getAccessToken = () => {
  if (localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  }
};

const getUserId = () => {
  if (localStorage.getItem("userId")) {
    return localStorage.getItem("userId");
  }
};

export default {
//   getUserPlaylists: () => {
//     const accessToken = getAccessToken();
//     const userId = getUserId();

//     apiSpotify.interceptors.request.use((req) => {
//       req.headers["Authorization"] = `Bearer ${accessToken}`;
//       return req;
//     });

//     return apiSpotify
//       .get(`users/${userId}/playlists`)
//       .then((response) => response.data.items);
//   },

playTracks: (context, offset) => {
        const accessToken = getAccessToken();
    const userId = getUserId();

    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });
    const songs = this.state.items.slice(offset).map(s => s.uri);
    axios.put('/me/player/play', { uris: songs });
  };

};