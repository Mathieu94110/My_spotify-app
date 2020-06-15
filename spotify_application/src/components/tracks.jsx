import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";

export default class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: [],
      playListId:null
    };
  }
  componentDidMount() {
  
   let access_token = localStorage.access_token;
   const config = {
      headers: {
        Autorization: `Bearer ${access_token}`,
      },
    };
    const params = queryString.parse(this.props.location.search);
    this.setState({playListId:params.id})
    axios
      .get(
        "https://api.spotify.com/v1/playlists/" + params.id + "/tracks",
        config
      )
        .then((res) => {
          
          console.log(res.data.items)
          this.setState({musics: res.data.items})
      });
  }
  render() {
    return (
      <div>
        {this.state.musics.map((music, index) => {
          return <div key={index}>{music.track.name}</div>;
        })}
      </div>
    );
  }
}
