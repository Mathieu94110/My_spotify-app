# Spotify React application on web client

Spotify Web Client using [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Features

- Play full audio tracks.
- Add playlists.
- See your recently played tracks and your top artists.
- Add or remove tracks from your library.
- Search tracks, albums, artists and playlists.

## Try it out

https://my-spotify-app-theta.vercel.app/

**Warning:** Spotify Playback requires users to authenticate with spotify credentials.

## How to Run locally

First you need a [Spotify Client ID](https://developer.spotify.com/dashboard/applications).

```bash
$ git clone https://github.com/francoborrelli/spotify-react-web-client.git
$ cd My_spotify-app
$ npm start
```

You will have to define a '.env' file and set the following variables:

```
REACT_APP_SPOTIFY_CLIENT_ID="YOUR_SPOTIFY_CLIENT_ID"
REACT_APP_DEV_REDIRECT_URI=http://localhost:3000/
```

Do not forget to indicate redirect uri on your spotify account dashboard

Now run:

```bash
$ npm start
```

and visit http://localhost:3000.

## Screenshots

![browse](src/assets/images/spotify-login-screen.PNG?raw=true "Login")
![browse](src/assets/images/spotify-home-screen.PNG?raw=true "Home")
![playlist](src/assets/images/spotify-search-screen.PNG?raw=true "Search")
![artist](src/assets/images/spotify-playlists-screen.PNG?raw=true "Playlists")
![devices](src/assets/images/spotify-playlist-details-screen.PNG?raw=true "laylistDetails")
