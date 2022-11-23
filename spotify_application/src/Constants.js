const prod = {
  url: {
    API_URL: 'https://mathieu94110.github.io/My_spotify-app/',
  },
};
const dev = {
  url: {
    API_URL: 'http://localhost:3000',
  },
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
