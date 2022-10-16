import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./playlists.css";
import {
  getUserPlaylists,
  createPlaylist,
} from "../../store/playlists/playlistsSlice";

import UserPlaylists from "../../components/playlists/userPlaylists/userPlaylists";
import CreatePlaylist from "../../components/playlists/createPlaylist/createPlaylist";
import CreatePlaylistModel from "../../components/playlists/createPlaylistModel/createPlaylistModel";

const Playlists = () => {
  const [createdPlaylistInfo, setCreatedPlaylistInfo] = useState({});
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);

  const validatePlaylist = (value) => {
    setCreatedPlaylistInfo(value);
  };
  const confirmPlaylistCreation = () => {
    dispatch(createPlaylist(createdPlaylistInfo));
  };
  const cancelPlaylistCreation = () => {
    setCreatedPlaylistInfo({});
  };

  return (
    <div className="playlists-container">
      <div className="playlists-content">
        <UserPlaylists />
        <CreatePlaylist
          createPlayList={validatePlaylist}
          cancelPlaylistCreation={cancelPlaylistCreation}
          setCreateDisabled={isCreateButtonDisabled}
          confirmPlaylistCreation={confirmPlaylistCreation}
        />
        {createdPlaylistInfo.name && (
          <CreatePlaylistModel
            name={createdPlaylistInfo.name}
            description={createdPlaylistInfo.description}
          />
        )}
      </div>
    </div>
  );
};

export default Playlists;
