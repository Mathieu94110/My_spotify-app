import { useState } from "react";
import "./Playlists.scss";
import { useDispatch } from "react-redux";
import { createPlaylist } from "../../store/playlists/playlistsSlice";
import UserPlaylists from "../../components/playlists/userPlaylists/UserPlaylists";
import CreatePlaylist from "../../components/playlists/createPlaylist/CreatePlaylist";
import CreatePlaylistModel from "../../components/playlists/createPlaylistModel/CreatePlaylistModel";

const Playlists = () => {
  const [createdPlaylistInfo, setCreatedPlaylistInfo] = useState({});
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false);

  const dispatch = useDispatch();

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
    <div className="playlists">
      <div className="playlists__content">
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
