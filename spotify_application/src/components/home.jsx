import React, { Component } from "react";
import axios from "axios";
import Tracks from "./tracks";
import Search from './search';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
 
    };

  }
  componentDidMount() {
    let access_token = localStorage.access_token;
    let userId = localStorage.id;
    if (access_token && userId) {
      const config = {
        headers: { Authorization: `Bearer ${access_token}` },
      };
      axios
        .get(
          "https://api.spotify.com/v1/users/" + userId + "/playlists",
          config
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            playlists: res.data.items,
          });
        });
    } else {
      this.props.history.push("/auth");
    }
  }

    
  


  render() {
    return (
      <div>
        <h1>Page d'accueil</h1>
        <div style={{ height: "500px" }}>
          {this.state.playlists.map((playlist, index) => {
            return (
              <div key={index}>
                <span style={{ fontWeight: "bold" }}>Artiste :</span>{" "}
                {playlist.name}
                <img src={playlist.images[0].url} style={{ width: "50px" }} />
                <button
                  onClick={() =>
                    (window.location = "/tracks?id=" + playlist.id)
                  }
                >
                  Voir les titres
                </button>
                
              </div>
            );
            
          }
       
          )}
          <Search />
        </div>
       
      </div>
  
    );
  }
}
