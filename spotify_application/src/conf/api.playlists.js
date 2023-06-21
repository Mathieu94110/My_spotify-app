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
  id: playlists.id,
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

  createUserPlaylist: (value) => {
    const { name, description } = value;
    const accessToken = getAccessToken();
    const userId = getUserId();

    apiSpotify.interceptors.request.use((req) => {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .post(`users/${userId}/playlists`, {
        name: name,
        description: description,
      })
      .then((response) => response.data)
      .then((data) => {
        const playlistInfo = {
          uri: data.uri,
          name: data.name,
          description: data.description,
          id: data.id,
        };
        return playlistInfo;
      });
  },

  addTrackToPlaylist: (infos) => {
    const { uri, id } = infos;
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .post(`https://api.spotify.com/v1/playlists/${id}/tracks?uris=${uri}`)
      .then((response) => response);
  },
};
