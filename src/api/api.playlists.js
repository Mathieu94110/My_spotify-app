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

export const PlaylistsMap = (playlists) => ({
  image: playlists.images[0]?.url ? playlists.images[0].url : "",
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
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });

    return apiSpotify
      .get(`users/${userId}/playlists`)
      .then((response) => response.data.items);
  },

  getUserPlaylistItems: async (playlist_id) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      console.error("Error:", error);
    }
  },

  createUserPlaylist: (value) => {
    const { name, description } = value;
    const accessToken = getAccessToken();
    const userId = getUserId();

    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
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
    const track = {
      uris: [uri],
      position: 0,
    };
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });
    return apiSpotify
      .post(`playlists/${id}/tracks`, track)
      .then((response) => response);
  },

  deleteTrackFromPlaylist: (infos) => {
    const { trackUri, playlistId } = infos;
    const track = {
      tracks: [
        {
          uri: trackUri,
        },
      ],
    };
    const accessToken = getAccessToken();
    apiSpotify.interceptors.request.use((req) => {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
      return req;
    });
    return apiSpotify
      .delete(`playlists/${playlistId}/tracks`, { data: track })
      .then((response) => response);
  },
};
