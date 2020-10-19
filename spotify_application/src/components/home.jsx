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
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import background_img1 from './images/spotify_homepage_img.jpg'

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
    return (<div>
     <h1 style={{margin:"2vh auto", color:"gold"}}>Bienvenue sur votre plateforme Spotify, vous êtes bien connecté</h1>
      <div style={{ display: "flex",justifyContent:"space-around", width: "100%", height:"600px"}}>
            <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
   
  }}>
      <GridList cellHeight={180} style={{width: 500,
    height: 450,}}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Playlists actuelles</ListSubheader>
        </GridListTile>
        {this.state.playlists.map((playlist, index) => (
           <GridListTile key={index}>
                   {playlist.images[0] && (
            <img src={playlist.images[0].url} alt={playlist.title} />)}
            <GridListTileBar
         title={playlist.name}
     
              actionIcon={
                <IconButton aria-label={`Voir titres`} style={{    color: 'rgba(255, 255, 255, 0.54)',}}>
                  <InfoIcon onClick={() =>
                    (window.location =
                      "/playlists?id=" +
                      playlist.id +
                      "&artist=" +
                      playlist.name)} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
        <div style={{ display: "flex", width: "20%", height:"600px" }}>
              <CreatePlaylist />
          </div>
        <div style={{ display: "flex", width: "40%", height:"600px"  }}>
                 <Search />
          </div>
     </div>
      </div>
    );
  }
}
