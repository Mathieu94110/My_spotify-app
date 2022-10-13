import { useState, useEffect } from "react";
// import axios from "axios";
// import CreatePlaylist from "./createPlaylist";
import { selectDisplayName } from "../../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import "./playlists.css";
import Card from "../../layout/card/card";
import {
  selectplaylistsItems,
  getUserPlaylists,
} from "../../store/playlists/playlistsSlice";
import UserPlaylists from "./userPlaylists/userPlaylists";
import CreatePlaylist from "./createPlaylist/createPlaylist";
import axios from "axios";
import PlaylistAvatar from "./playlistAvatar/playlistAvatar";

const Playlists = () => {
  const [playlistsLoading, setPlaylistsLoading] = useState(false);
  const [searchImage, setSearchImage] = useState("");
  const [imageResult, setImageResult] = useState([]);
  const userName = useSelector(selectDisplayName);
  const playlists = useSelector(selectplaylistsItems);
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);

  useEffect(() => {
    if (!searchImage) return setSearchImage([]);

    let config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: searchImage,
        type: "artist",
      },
    };
    // axios.get("https://api.spotify.com/v1/search", config).then((res) => {
    //   console.log("ici =", res.data);
    //   setImageResult(
    //     res.data.artists.items.map((artist) => {
    //       const smallestAlbumImage = artist.images.reduce((smallest, image) => {
    //         if (image.height < smallest.height) return image;
    //         return smallest;
    //       }, artist.images[0]);

    //       if (smallestAlbumImage.url && smallestAlbumImage.url !== undefined) {
    //         return {
    //           uri: artist.uri,
    //           image: smallestAlbumImage.url,
    //         };
    //       }
    //     })
    //   );
    // });
    axios.get("https://api.spotify.com/v1/search", config).then((res) => {
      const images = res.data.artists.items.map((artist) => {
        const smallestAlbumImage = artist.images.reduce((smallest, image) => {
          if (image.height < smallest.height) return image;
          return smallest;
        }, artist.images[0]);
        return {
          uri: artist.uri,
          picture: smallestAlbumImage?.url,
        };
      });
      const validImages = images.filter((image) => image.picture !== undefined);
      setImageResult(validImages);
    });
  }, [searchImage]);

  const handleClick = (value) => {
    setSearchImage(value);
  };
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
    <div className="playlists-container">
      <div className="playlists-content">
        <UserPlaylists />
        <CreatePlaylist handleClick={handleClick} />
        <PlaylistAvatar imageResult={imageResult} />
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

export default Playlists;
