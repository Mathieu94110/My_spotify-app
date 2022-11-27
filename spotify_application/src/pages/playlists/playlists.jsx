import { useState, useEffect } from 'react';
import './Playlists.scss';
import { useDispatch } from 'react-redux';
import UserPlaylists from '../../components/playlists/userPlaylists/UserPlaylists';
import CreatePlaylist from '../../components/playlists/createPlaylist/CreatePlaylist';
import CreatePlaylistModel from '../../components/playlists/createPlaylistModel/CreatePlaylistModel';
import Loading from '../../components/utils/Loading';
import { getPlaylists, createPlaylist } from '../../store/actions';
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistsListSelector,
} from '../../store/selectors';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Playlists = (props) => {
  const [createdPlaylistInfo, setCreatedPlaylistInfo] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    props.getPlaylists();
  }, []);

  const validatePlaylist = (value) => {
    setCreatedPlaylistInfo(value);
  };

  const cancelPlaylistCreation = () => {
    setCreatedPlaylistInfo({});
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

export default connect(
  (state) => ({
    isLoading: getPlaylistsIsLoadingSelector(state),
    userPlaylists: getPlaylistsListSelector(state),
  }),
  {
    getPlaylists,
  }
)(Playlists);
