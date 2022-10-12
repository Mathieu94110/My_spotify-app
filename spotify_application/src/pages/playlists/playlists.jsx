import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePlaylist from "./createPlaylist";
import { selectDisplayName } from "../../store/user/userSlice";
import { useSelector } from "react-redux";
import "./playlists.css";
import Card from "../../layout/card/card";
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="playlists-container">
      <ul>
        {playlists?.items &&
          playlists.items.map((item, index) => (
            <div key={index}>
              <Card
               image={item.images[0] && item.images[0].url}
               uri={item.uri}
               name={item.name}
               description={item.description}
                />
            </div>
          ))}
      </ul>
      {/* {playlistsLoading && <div>Loading...</div>}

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
      )} */}
    </div>
  );
};

export default Playlists;
