import { scopes } from "./Constants";

const authEndpoint = "https://accounts.spotify.com/authorize";

export const handleLogin = () => {
  const redirectUri =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV_REDIRECT_URI
      : process.env.REACT_APP_PROD_REDIRECT_URI;
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  window.location.href = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true&redirect_uri=${redirectUri}`;
};
