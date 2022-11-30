const prod = {
  url: {
    API_URL: 'https://mathieu94110.github.io/My_spotify-app/',
    REACT_APP_SPOTIFY_CLIENT_ID: '230be2f46909426b8b80cac36446b52a',
  },
};
const dev = {
  url: {
    API_URL: 'http://localhost:3000/callback',
    REACT_APP_SPOTIFY_CLIENT_ID: '230be2f46909426b8b80cac36446b52a',
  },
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
