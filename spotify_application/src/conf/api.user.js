import * as axios from 'axios';

const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});
const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken');
  }
};
const accessToken = getAccessToken();

apiSpotify.interceptors.request.use((req) => {
  req.headers['Authorization'] = `Bearer ${accessToken}`;
  return req;
});

export default {
  getLastActivity: () =>
    apiSpotify
      .get(
        'me/player/recently-played'
      ) /* .then((response) => response.data.items) */
      .then((response) => {
        const recentlyPlayed = [];
        const map = new Map();

        for (let item of response.data.items) {
          if (!map.has(item.track.name)) {
            map.set(item.track.name, true);
            recentlyPlayed.push({
              name: item.track.name,
              artist: item.track.artists[0].name,
              album: item.track.album.name,
              albumArt: item.track.album.images[0].url,
            });
          }
        }
        console.log(recentlyPlayed);
        return recentlyPlayed;
      }),
};
