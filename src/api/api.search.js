import * as axios from 'axios';
const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken');
  }
};

export default {
  searchTracks: (config) => {
    const accessToken = getAccessToken();

    apiSpotify.interceptors.request.use((req) => {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify.get(`search`, config).then((response) => response);
  },
};
