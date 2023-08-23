import { useState, useEffect } from "react";
import "./Playlists.scss";
import { useDispatch } from "react-redux";
import UserPlaylists from "../../components/playlists/UserPlaylists/UserPlaylists";
import CreatePlaylist from "../../components/playlists/CreatePlaylist/CreatePlaylist";
import Loading from "../../utils/Loading";
import { getPlaylists, createPlaylist } from "../../store/actions";
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistsSelector,
} from "../../store/selectors";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Playlists = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    props.getPlaylists();
  }, []);

  const confirmPlaylistCreation = (formJson) => {
    dispatch(createPlaylist(formJson))
      .then(() => {
        props.getPlaylists();
        toast.success("La playlist a bien été créee !", {
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
          <>
            <div className="playlists__items">
              <CreatePlaylist createPlayList={confirmPlaylistCreation} />
            </div>
            <div className="playlists__items">
              <UserPlaylists playlists={props.userPlaylists} />
            </div>
          </>
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
    userPlaylists: getPlaylistsSelector(state),
  }),
  {
    getPlaylists,
  }
)(Playlists);
