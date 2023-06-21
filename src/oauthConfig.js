const authEndpoint = 'https://accounts.spotify.com/authorize';
import { config } from './Constants';
export const getAuthorizeHref = () => {
  const scopes = [
    'user-read-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'user-read-recently-played',
    'playlist-modify-private',
    'ugc-image-upload',
    'user-follow-modify',
    'user-follow-read',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'user-read-email',
    'user-read-playback-state',
  ];
  const prodRedirectUri = 'https://mathieu94110.github.io/My_spotify-app/';
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_REDIRECT_URI
      : prodRedirectUri;
  return `${authEndpoint}?client_id=${clientId}&scope=${scopes.join(
    '%20'
  )}&response_type=token&redirect_uri=${redirectUri}`;
};
