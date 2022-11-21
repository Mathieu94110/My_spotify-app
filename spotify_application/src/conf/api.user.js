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
      .get('me/player/recently-played')
      .then((response) => (response.data.items ? response.data.items : [])),
};
