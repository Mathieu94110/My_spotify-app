import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CreatePlaylist from "./createPlaylist";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { ImageListItemBar } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { selectDisplayName } from "../../components/user/userSlice";
import { useSelector } from "react-redux";
import "./playlists.css";

const Playlists = () => {
  const [playlists, setPlaylists] = useState({});
  const [playlistsLoading, setPlaylistsLoading] = useState(false);

  const userName = useSelector(selectDisplayName);

  useEffect(() => {
    const loadData = async () => {
      setPlaylistsLoading(true);
      const result = getUserPlaylists();
      setPlaylists(result);
      setPlaylistsLoading(false);
    };
    loadData();
  }, []);

  const getUserPlaylists = () => {
    const user = localStorage.getItem("userId");
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://api.spotify.com/v1/users/" + user + "/playlists", config)
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="playlists-container">
      {playlistsLoading && <div>Loading...</div>}

      {playlists && (
        <div className="playlists-content">
          <div className="user-playlists">
            <ImageList rowHeight={180} className="image-list">
              <ImageListItem
                key="Subheader"
                cols={2}
                className="image-list-subheader-item"
              >
                <ListSubheader component="div">
                  <h2>Playlists actuelles</h2>
                </ListSubheader>
              </ImageListItem>
              {playlists?.items
                ? playlists.items.map((playlist, index) => (
                    <ImageListItem key={index}>
                      {playlist.images[0] && (
                        <img
                          src={playlist.images[0].url}
                          alt={playlist.title}
                        />
                      )}
                      <ImageListItemBar
                        title={playlist.name}
                        actionIcon={
                          <IconButton
                            aria-label={`Voir titres`}
                            className="icon-button-color"
                          >
                            <InfoIcon
                              onClick={() =>
                                (window.location =
                                  "/playlists?id=" +
                                  playlist.id +
                                  "&artist=" +
                                  playlist.name)
                              }
                            />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))
                : null}
            </ImageList>
          </div>
          <div className="create-playlist-container">
            <CreatePlaylist />
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlists;
