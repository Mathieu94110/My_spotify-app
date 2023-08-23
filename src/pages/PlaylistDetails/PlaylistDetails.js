import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SongRow from "../../components/playlists/PlaylistDetails/SongRow/SongRow";
import { connect, useDispatch } from "react-redux";
import {
  getPlaylistItems,
  removeTrackFromPlaylist,
  setPlayingIndex,
} from "../../store/actions";
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistItemsSelector,
  getPlaylistPLayingIndex,
} from "../../store/selectors";
import Loading from "../../utils/Loading";
import { toast, ToastContainer } from "react-toastify";
import "./PlaylistDetails.scss";

const PlaylistDetails = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id: playlistId, name: playlistName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    props.getPlaylistItems(playlistId);
  }, [playlistId]);

  const audioSrc = props.userPlaylistTracks[currentIndex]?.track.preview_url;

  const audioRef = useRef(
    new Audio(props.userPlaylistTracks[0]?.track.preview_url)
  );

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
  const playSong = (index) => {
    setCurrentIndex(index);
    setIsPlaying(!isPlaying);
    props.setPlayingIndex(index);
  };

  return (
    <div className="playlistDetails">
      <h1>{playlistName}</h1>
      <div className="playlistDetails__tracks">
        {!props.isLoading ? (
          props.userPlaylistTracks.length > 0 ? (
            props.userPlaylistTracks?.map((item, index) => (
              <SongRow
                key={item.id}
                currentIndex={index}
                playSong={playSong}
                isPlaying={isPlaying}
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
    userPlaylistTracks: getPlaylistItemsSelector(state),
    playlistPlayingIndex: getPlaylistPLayingIndex(state),
  }),
  {
    getPlaylistItems,
    setPlayingIndex,
  }
)(PlaylistDetails);
