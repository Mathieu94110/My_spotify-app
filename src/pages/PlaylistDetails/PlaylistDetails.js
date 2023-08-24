import { useState, useEffect, useRef, useLayoutEffect } from "react";
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
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { id: playlistId, name: playlistName } = useParams();
  const dispatch = useDispatch();

  const audioSrc =
    props.userPlaylistTracks[props.playlistPlayingIndex]?.track?.preview_url;
  const audioRef = useRef(
    new Audio(props.userPlaylistTracks[0]?.track?.preview_url)
  );
  const isReady = useRef(false);
  const intervalRef = useRef();

  //Call in order to get userPlaylistTracks
  useEffect(() => {
    props.getPlaylistItems(playlistId);
  }, [playlistId]);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        console.log("audioRef.current.ended");
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (props.playlistPlayingIndex) {
      console.log(props.userPlaylistTracks[props.playlistPlayingIndex]);
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);

      setTrackProgress(audioRef.current.currentTime);

      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        isReady.current = true;
      }
    }
  }, [props.playlistPlayingIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

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
    console.log(index);
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
                key={index}
                currentIndex={index}
                isPlaying={isPlaying}
                playSong={playSong}
                track={item.track}
                playingIndex={props.playlistPlayingIndex}
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
