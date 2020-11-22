import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class newPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreatingPlaylitst: false,
      
      research: "",
      albums: [],
      artists: [],
      tracks: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      research: e.target.value,
    });
  };

  searchArtist = () => {
    let access_token = localStorage.access_token;
    let config = {
      headers: { Authorization: `Bearer ${access_token}` },
      params: { q: this.state.research, type: "artist,track,album", limit: 50 },
    };

    axios.get("https://api.spotify.com/v1/search", config).then((res) => {
      console.log(res.data);
      this.setState({
        tracks: res.data.tracks.items,
      });
    });
  };
  createNewPlaylist() {
    this.setState({ isCreatingPlaylitst: true });
  }
  addTrack = (track) => {
 
    console.log(track);

    let access_token = localStorage.access_token;


    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
      params: { uris: track.uri },
    };

    axios
      .post(
        "https://api.spotify.com/v1/playlists/" +
        this.props.playListId +
          "/tracks",
        {},
        config
      )
      .then((res) => {
        console.log(res);
        // on met à jour la liste des tracks
        this.props.refreshAdd()
      });

    console.log(track);
  };

  render() {
    const isCreatingPlaylitst = this.state.isCreatingPlaylitst;
    let button;
    if (isCreatingPlaylitst) {
      return (
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <form
          style={{position:"relative"}}
          >
            <TextField
              id="standard-basic"
              label="Artiste , musique ou album"
              type="text"
              style={{ width: "200px" }}
              value={this.state.research}
              onChange={this.handleChange.bind(this)}
            />

            <Button
              type="button"
              onClick={this.searchArtist.bind(this)}
              variant="contained"
              color="primary"
              style={{ position: "absolute", top: "50%", transform: "translateY(-50%)",marginLeft:"20px" }}
            >
              Rechercher
            </Button>
          </form>

          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              {this.state.tracks.length > 0 ? (
                <Typography variant="h4" component="h4">
                  Tracks
                </Typography>
              ) : null}
              <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {this.state.tracks.map((track, index) => {
                  return (
                    <ListItem>
                      <ListItemText primary={track.name} />
                      <button onClick={() => this.addTrack(track)} >+</button>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={4}></Grid>

          </Grid>
        </div>
      );
    } else {
    }
    return (
      <div>
   

<label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{ margin: "30px 0px" }}
          onClick={this.createNewPlaylist.bind(this)}       startIcon={<CloudUploadIcon />} >
          Upload
        </Button>
      </label>

      </div>
    );
  }
}
