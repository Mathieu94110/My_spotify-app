import React, { Component } from "react";
import axios from "axios";
import Search from "./search";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardMedia } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CreatePlaylist from "./createPlaylist";

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
          console.log(res.data.items);
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
        <h1>Bienvenue sur votre plateforme Spotify, vous êtes bien connecté</h1>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "5%" }}
        >
          {this.state.playlists.map((playlist, index) => {
            return (
              <Card key={index} style={{ margin: "5px" }}>
                <CardActionArea>
                  {playlist.images[0] && (
                    <CardMedia
                      image={playlist.images[0].url}
                      style={{ height: "200px" }}
                    />
                  )}

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {playlist.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      (window.location =
                        "/playlists?id=" +
                        playlist.id +
                        "&artist=" +
                        playlist.name)
                    }
                  >
                    Voir les titres
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2.5%" }}
        >
        <CreatePlaylist />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginBottom: "2.5%" }}
        >
        <Search />
        </div>
      </div>
    );
  }
}
