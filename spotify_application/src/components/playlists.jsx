import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import NewPlaylist from "./newPlaylist";
import DeletePlaylistItem from "./deletePlaylistItem";


export default class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: [],
      artist: "",
      playListId: null,
    };
  }

  componentDidMount() {
    this.refresh();
  }
  refresh = () => {
    let access_token = localStorage.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const params = queryString.parse(this.props.location.search);
    this.setState({ playListId: params.id, artist: params.artist });
    console.log("PARAMS", params);
    axios
      .get(
        "https://api.spotify.com/v1/playlists/" + params.id + "/tracks",
        config
      )
      .then((res) => {
        console.log(res.data.items);
        console.log(res.data.items[0].track.artists[0].name);
        this.setState({ musics: res.data.items });
      });
  };

  // <div>{this.state.musics[0].track.artists[0].name}</div>

  render() {
    return (
      <div>
        <h1 style={{color:"gold"}}>{this.state.artist}</h1>
        <div>
          <NewPlaylist
            playListId={this.state.playListId}
            refresh={this.refresh}
          />

          <div style={{height:"500px",margin:"auto",textAlign:"left" , width:"500px", overflow:"auto"}}>
            {this.state.musics.map((music, index) => {
              return (
                <div
                  key={index}
                  style={{
                    margin: "auto",
                  }}
                >
                  <div>
                    {music.track.name}
                    <DeletePlaylistItem
                      playListId={this.state.playListId}
                      track={music.track}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
