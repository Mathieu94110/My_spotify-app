import * as axios from 'axios';

const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});
const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken');
  }
};

export const RecentActivityMap = (item) => ({
  name: item.track.name,
  artist: item.track.artists[0].name,
  album: item.track.album.name,
  albumArt: item.track.album.images[0].url,
});

export default {
  setUserProfileAsync: (accessToken) => {
    apiSpotify.interceptors.request.use((req) => {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .get('me')
      .then((response) => response.data)
      .then((data) => data);
  },

  getLastActivity: () => {
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .get('me/player/recently-played')
      .then((response) => response.data.items)
      .then((recentActivity) => recentActivity.map(RecentActivityMap));
  },
};
