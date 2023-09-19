import { useAppDispatch, useAppSelector } from "../../store/hooks";
import UserPlaylists from "../../components/playlists/UserPlaylists/UserPlaylists";
import CreatePlaylist from "../../components/playlists/CreatePlaylist/CreatePlaylist";
import Loading from "../../layout/Loading/Loading";
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
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsPlaylistsLoading);
  const userPlaylists = useAppSelector(selectUserPlaylists);

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
