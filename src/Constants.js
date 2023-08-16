export const scopes = [
  "user-read-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "user-read-recently-played",
  "playlist-modify-private",
  "ugc-image-upload",
  "user-follow-modify",
  "user-follow-read",
  "user-library-read",
  "user-library-modify",
  "user-top-read",
  "user-read-email",
  "user-read-playback-state",
];

const prod = {
  url: {
    API_URL: "https://mathieu94110.github.io/My_spotify-app/",
  },
};
const dev = {
  url: {
    API_URL: "http://localhost:3000",
  },
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
