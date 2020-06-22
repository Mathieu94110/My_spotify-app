import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
export default class deletePlaylistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteIcon = () => {
    let access_token = localStorage.access_token;
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      data: { tracks: [{ uri: this.props.track.uri }] },
    };
    axios
      .delete(
        "https://api.spotifty.com/v1/playlists/" +
          this.props.playListId +
          "/tracks",
        config
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  render() {
    return (
      <IconButton aria-label="delete" onClick={this.deleteIcon}>
        <DeleteIcon />
      </IconButton>
    );
  }
}
