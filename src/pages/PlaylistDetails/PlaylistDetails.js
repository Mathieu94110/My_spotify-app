import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SongRow from "../../components/playlists/PlaylistDetails/SongRow/SongRow";
import { connect, useSelector, useDispatch } from "react-redux";
import { getPlaylistItems, removeTrackFromPlaylist } from "../../store/actions";
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistsItemsListSelector,
} from "../../store/selectors";
import Loading from "../../utils/Loading";
import { toast, ToastContainer } from "react-toastify";
import "./PlaylistDetails.scss";

const PlaylistDetails = (props) => {
  const { id: playlistId, name: playlistName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    props.getPlaylistItems(playlistId);
  }, [playlistId]);

  const handleDeleteTrack = (track) => {
    const { uri: trackUri, name: trackName } = track.track;
    dispatch(removeTrackFromPlaylist({ trackUri, playlistId }))
      .then(() => {
        props.getPlaylistItems(playlistId);
        toast.success(`${trackName} a bien été supprimé de ${playlistName} !`, {
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
    <div className="playlistDetails">
      <h1>{playlistName}</h1>
      <div className="playlistDetails__tracks">
        {!props.isLoading ? (
          props.userPlaylistTracks.length > 0 ? (
            props.userPlaylistTracks?.map((item) => (
              <SongRow
                key={item.track.id}
                track={item.track}
                handleDelete={handleDeleteTrack}
              />
            ))
          ) : (
            <h2 className="playlistDetails__no-items">
              Cette playlist ne comporte aucun titre
            </h2>
          )
        ) : (
          <Loading />
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
    userPlaylistTracks: getPlaylistsItemsListSelector(state),
  }),
  {
    getPlaylistItems,
  }
)(PlaylistDetails);
