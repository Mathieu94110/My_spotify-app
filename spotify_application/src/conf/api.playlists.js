import * as axios from 'axios';
const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken');
  }
};

const getUserId = () => {
  if (localStorage.getItem('userId')) {
    return localStorage.getItem('userId');
  }
};

export const PlaylistsMap = (playlists) => ({
  image: playlists.images[0]?.url ? playlists.images[0].url : '',
  uri: playlists.uri,
  name: playlists.name,
  description: playlists.description,
});

export default {
  getUserPlaylists: () => {
    const accessToken = getAccessToken();
    const userId = getUserId();

    apiSpotify.interceptors.request.use((req) => {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .get(`users/${userId}/playlists`)
      .then((response) => response.data.items)
      .then((playlists) => playlists.map(PlaylistsMap));
  },
};
