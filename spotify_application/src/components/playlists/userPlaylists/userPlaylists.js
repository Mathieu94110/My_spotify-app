import { useState, useEffect } from "react";
import { selectDisplayName } from "../../../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import "./userPlaylists.css";
import Card from "../../../layout/card/card";
import {
  selectplaylistsItems,
  getUserPlaylists,
} from "../../../store/playlists/playlistsSlice";

const UserPlaylists = (details) => {
  const [playlistsLoading, setPlaylistsLoading] = useState(false);

  const userName = useSelector(selectDisplayName);
  const playlists = useSelector(selectplaylistsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);
  // useEffect(() => {
  //   const loadData = async () => {
  //     setPlaylistsLoading(true);
  //     const result = getUserPlaylists();
  //     setPlaylists(result);
  //     setPlaylistsLoading(false);
  //   };
  //   loadData();
  // }, []);

  // const getUserPlaylists = () => {
  //   const user = localStorage.getItem("userId");
  //   const token = localStorage.getItem("accessToken");
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  //   axios
  //     .get("https://api.spotify.com/v1/users/" + user + "/playlists", config)
  //     .then((response) => {
  //       setPlaylists(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="user-playlists-container">
      <div className="user-playlists-title">
        {" "}
        <h2>Vos playlists</h2>
      </div>
      <div className="user-playlists-content">
        {playlists &&
          playlists.map((item, index) => (
            <div key={index}>
              <Card
                image={item.images[0] && item.images[0].url}
                uri={item.uri}
                name={item.name}
                description={item.description}
                details="true"
              />
            </div>
          ))}
      </div>
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

export default UserPlaylists;
