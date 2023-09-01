import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserPlaylists from "../../components/playlists/UserPlaylists/UserPlaylists";
import CreatePlaylist from "../../components/playlists/CreatePlaylist/CreatePlaylist";
import Loading from "../../utils/Loading";
import { ToastContainer, toast } from "react-toastify";
import {
  getPlaylists,
  createPlaylist,
  selectUserPlaylists,
  selectIsPlaylistsLoading,
} from "../../store/playlists/playlistsSlice";
import "react-toastify/dist/ReactToastify.css";
import "./Playlists.scss";

const Playlists = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsPlaylistsLoading);
  const userPlaylists = useSelector(selectUserPlaylists);
  useEffect(() => {
    dispatch(getPlaylists());
  }, []);

  const confirmPlaylistCreation = (formJson) => {
    dispatch(createPlaylist(formJson))
      .then(() => {
        dispatch(getPlaylists());
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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="playlists__items">
              <CreatePlaylist createPlayList={confirmPlaylistCreation} />
            </div>
            <div className="playlists__items">
              <UserPlaylists playlists={userPlaylists} />
            </div>
          </>
        )}
      </div>
      {/* Tag below is necessary to display toast message*/}
      <ToastContainer />
    </div>
  );
};

export default Playlists;
