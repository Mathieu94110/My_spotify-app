import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
    let userId = localStorage.id;

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
            margin: "auto",
          }}
        >
          <form
            style={{
              display: "flex",

              margin: "auto",
            }}
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
            >
              Rechercher
            </Button>
          </form>

          <Grid container spacing={2}>
            <Grid item xs={8}>
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
                    <ListItem button onClick={() => this.addTrack(track)}>
                      <ListItemText primary={track.name} />
                      <button >+</button>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </div>
      );
    } else {
    }
    return (
      <div>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          color="primary"
          style={{ margin: "30px 0px" }}
          onClick={this.createNewPlaylist.bind(this)}
        >
          Upload
        </Button>
      </div>
    );
  }
}
