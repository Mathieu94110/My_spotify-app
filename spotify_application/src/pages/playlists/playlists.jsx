import { useState, useEffect } from 'react';
import './Playlists.scss';
import { useDispatch } from 'react-redux';
import { createPlaylist } from '../../store/playlists/playlistsSlice';
import UserPlaylists from '../../components/playlists/userPlaylists/UserPlaylists';
import CreatePlaylist from '../../components/playlists/createPlaylist/CreatePlaylist';
import CreatePlaylistModel from '../../components/playlists/createPlaylistModel/CreatePlaylistModel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPlaylists } from '../../store/playlists/playlists.actions';
import { connect } from 'react-redux';
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistsListSelector,
} from '../../store/selectors';
import Loading from '../../components/utils/Loading';

const Playlists = (props) => {
  const [createdPlaylistInfo, setCreatedPlaylistInfo] = useState({});
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    props.getPlaylists();
  }, []);
  const validatePlaylist = (value) => {
    setCreatedPlaylistInfo(value);
  };
  const confirmPlaylistCreation = () => {
    dispatch(createPlaylist(createdPlaylistInfo))
      .then(() => {
        toast.success('La playlist a bien été créee !', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(`${error.message} !`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  const cancelPlaylistCreation = () => {
    setCreatedPlaylistInfo({});
  };

  return (
    <div className="playlists">
      <div className="playlists__content">
        {props.isLoading ? (
          <Loading />
        ) : (
          <UserPlaylists playlists={props.userPlaylists} />
        )}
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
      {/* Tag below is necessary to display toast message*/}
      <ToastContainer />
    </div>
  );
};

// export default Playlists;
export default connect(
  (state) => ({
    isLoading: getPlaylistsIsLoadingSelector(state),
    userPlaylists: getPlaylistsListSelector(state),
  }),
  {
    getPlaylists,
  }
)(Playlists);
