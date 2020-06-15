import React, { Component } from "react";
import axios from "axios";
import Tracks from "./tracks";
import Search from './search';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardMedia } from "@material-ui/core";

import { Button } from "@material-ui/core";


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
      <div style={{background:"red"
  }
}>
        <h1>Page d'accueil</h1>
        <div style={{ display: "flex", justifyContent: "center", margin:'5%' }}>
          {this.state.playlists.map((playlist, index) => {
            return (
              <Card key={index} style={{ margin: "5px" }}>
                <CardActionArea>
                  <CardMedia
                    image={playlist.images[0].url}
                    style={{ height: "200px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {playlist.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      (window.location = "/playlists?id=" + playlist.id)
                    }
                  >
                    Voir les titres
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
        <Search />
      </div>
    );
  }
}
