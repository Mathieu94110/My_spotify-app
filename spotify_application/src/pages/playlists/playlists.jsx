import { useState, useEffect } from "react";
import { selectDisplayName } from "../../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./playlists.css";
// import Card from "../../layout/card/card";
import {
  selectplaylistsItems,
  getUserPlaylists,
  createPlaylist,
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
    setClickedImage(value);
  };
  const validatePlaylist = (value) => {
    setCreatedPlaylistInfo(value);
  };
  const confirmPlaylistCreation = () => {
    dispatch(createPlaylist(createdPlaylistInfo));
  };

  const cancelPlaylistCreation = () => {
    setCreatedPlaylistInfo({});
    setImageResult([]);
  };

  return (
    <div className="playlists-container">
      <div className="playlists-content">
        <UserPlaylists />
        <CreatePlaylist
          playlistImage={clickedImage}
          createPlayList={validatePlaylist}
          cancelPlaylistCreation={cancelPlaylistCreation}
          setCreateDisabled={isCreateButtonDisabled}
          confirmPlaylistCreation={confirmPlaylistCreation}
        />
        <PlaylistAvatar
          imageResult={imageResult}
          setPlaylistImage={setPlaylistImage}
          handleClick={handleClick}
        />
        {createdPlaylistInfo.name && (
          <CreatePlaylistModel
            name={createdPlaylistInfo.name}
            description={createdPlaylistInfo.description}
            image={createdPlaylistInfo.image?.picture}
            uri={createdPlaylistInfo.image?.uri}
          />
        )}
      </div>
    </div>
  );
};

export default Playlists;
