import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tracks: [],
      albums: [],
      artists:[]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(this.state.search);
  };
  addSearch() {
    //Aut q= +keywords +type
    let access_token = localStorage.access_token;
    let config = {
      headers: { Authorization: `Bearer ${access_token}` },
      params: {
        q: this.state.search , type: "track,album,artist"
      },
    };
    axios.get("https://api.spotify.com/v1/search", config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          artists: res.data.artists.items,
          albums: res.data.albums.items,
          tracks: res.data.tracks.items,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          ></input>
         
          <button onClick={this.addSearch.bind(this)}>Rechercher</button>
          {this.state.tracks.map((track, index) => {
            return <div key={index}>
             {track.name}
            </div>
          })}
          {this.state.albums.map((album, index) => {
            return <div key={index}>
              {album.name}
            </div>
          })}
          {this.state.artists.map((artist, index) => {
            return <div key={index}>
              {artist.name}
            </div>
          })}
        </div>
      </div>
    );
  }
}
