const authEndpoint = "https://accounts.spotify.com/authorize";

export const getAuthorizeHref = () => {
  const scopes = [
    "user-read-private",
    "playlist-modify-public",
    "playlist-modify-private",
  ];
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token`;
};
