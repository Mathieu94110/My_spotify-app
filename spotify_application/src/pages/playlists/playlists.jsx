import { useState, useEffect } from "react";
import { selectDisplayName } from "../../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./playlists.css";
// import Card from "../../layout/card/card";
import {
  selectplaylistsItems,
  getUserPlaylists,
} from "../../store/playlists/playlistsSlice";

import UserPlaylists from "../../components/playlists/userPlaylists/userPlaylists";
import CreatePlaylist from "../../components/playlists/createPlaylist/createPlaylist";
import PlaylistAvatar from "../../components/playlists/playlistAvatar/playlistAvatar";
import CreatePlaylistModel from "../../components/playlists/createPlaylistModel/createPlaylistModel";

const Playlists = () => {
  const [playlistsLoading, setPlaylistsLoading] = useState(false);
  const [searchImage, setSearchImage] = useState("");
  const [imageResult, setImageResult] = useState([]);
  const [clickedImage, setClickedImage] = useState("");
  const [createdPlaylistInfo, setCreatedPlaylistInfo] = useState({});
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false);
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
  const setPlaylistImage = (value) => {
    console.log("here", console.log(value));
    setClickedImage(value);
  };
  const validatePlaylist = (value) => {
    // console.log(value);
    setCreatedPlaylistInfo(value);
  };

  const cancelPlaylistCreation = () => {
    setCreatedPlaylistInfo({});
    setImageResult([]);
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
        <CreatePlaylist
          handleClick={handleClick}
          playlistImage={clickedImage}
          createPlayList={validatePlaylist}
          cancelPlaylistCreation={cancelPlaylistCreation}
          setCreateDisabled={isCreateButtonDisabled}
        />

        {imageResult.length > 0 && (
          <PlaylistAvatar
            imageResult={imageResult}
            setPlaylistImage={setPlaylistImage}
          />
        )}
        {createdPlaylistInfo.name && (
          <CreatePlaylistModel
            name={createdPlaylistInfo.name}
            description={createdPlaylistInfo.description}
            image={createdPlaylistInfo.image?.picture}
            uri={createdPlaylistInfo.image?.uri}
          />
        )}
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
