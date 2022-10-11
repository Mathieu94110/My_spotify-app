import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default class createPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      albums: [],
    };
  }

  searchImage = () => {
    let accessToken = localStorage.accessToken;
    let config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: this.state.description,
        type: "album",
        limit: 3,
      },
    };
    axios.get("https://api.spotify.com/v1/search", config).then((res) => {
      console.log("create Playlists =", res.data);
      this.setState({
        albums: res.data.albums.items[0].images[0].url,
      });
      alert(JSON.stringify(this.state.albums));
    });
  };

  create = () => {
    let accessToken = localStorage.accessToken;
    let userId = localStorage.userId;
    if (accessToken && userId) {
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      axios
        .post(
          "https://api.spotify.com/v1/users/" + userId + "/playlists",
          {
            name: this.state.name,

            description: this.state.description,
            images: [
              {
                KEY: "image_description",
                height: 640,
                url: `${JSON.stringify(this.state.albums)}`,
                width: 640,
              },
            ],
          },
          config
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.description]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "100px auto",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Nom de la playlist"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            style={{}}
          />
          <TextField
            id="outlined-basic"
            name="description"
            label="Image(Nom d'un album)"
            value={this.state.description}
            onChange={this.handleChange}
            style={{}}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.searchImage}
          >
            Valider l'album
          </Button>
          <Button variant="contained" color="secondary" onClick={this.create}>
            Créer la playlist
          </Button>
        </div>
        <div style={{ height: "480px" }}>
          <h2 style={{color:"red"}}>En cours de rénovation</h2>
          {this.state.albums.map((album, index) => {
            return (
              <div>
                <ul>
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar alt="album image" src={album.images[2].url} />
                    </ListItemAvatar>
                    <ListItemText primary={album.name} />
                  </ListItem>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

/*
state et api call /


const app = {};

app.getArists = (artist) => $.ajax({
    url: 'https://api.spotify.com/v1/search',
    method: 'GET',
    dataType: 'json',
    data: {
        type: 'artist',
        q: artist
    }
});

app.getAristsAlbums = (id) => $.ajax({
    url: `https://api.spotify.com/v1/artists/${id}/albums`,
    method: 'GET',
    dataType: 'json',
    data: {
        album_type: 'album',
    }
});

app.getAlbumTracks = (id) => $.ajax({
    url: `https://api.spotify.com/v1/albums/${id}/tracks`,
    method: 'GET',
    dataType: 'json'
});

app.getAlbums = function(artists) {
    let albums = artists.map(artist => app.getAristsAlbums(artist.id));
    $.when(...albums)
        .then((...albums) => {
            let albumIds = albums
                .map(a => a[0].items)
                .reduce((prev,curr) => [...prev,...curr] ,[])
                .map(album => app.getAlbumTracks(album.id));

            app.getTracks(albumIds);
        });
};

app.getTracks = function(tracks) {
    $.when(...tracks)
        .then((...tracks) => {
            tracks = tracks
                .map(getDataObject)
                .reduce((prev,curr) => [...prev,...curr],[]);   
            const randomPlayList = getRandomTracks(50,tracks);
            app.createPlayList(randomPlayList);
        })
};

app.createPlayList = function(songs) {
    const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:';
    songs = songs.map(song => song.id).join(',');
    $('.loader').removeClass('show');
    $('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
}

app.init = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let artists = $('input[type=search]').val();
        $('.loader').addClass('show');
        artists = artists
            .split(',')
            .map(app.getArists);
        
        $.when(...artists)
            .then((...artists) => {
                artists = artists.map(a => a[0].artists.items[0]);
                console.log(artists);
                app.getAlbums(artists);
            });
    });

}

const getDataObject = arr => arr[0].items;

function getRandomTracks(num, tracks) {
    const randomResults = [];
    for(let i = 0; i < num; i++) {
        randomResults.push(tracks[ Math.floor(Math.random() * tracks.length) ])
    }
    return randomResults;
}

$(app.init);

*/
