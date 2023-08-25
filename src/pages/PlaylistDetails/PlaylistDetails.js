import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SongRow from "../../components/playlists/PlaylistDetails/SongRow/SongRow";
import { connect, useDispatch } from "react-redux";
import {
  getPlaylistItems,
  removeTrackFromPlaylist,
  setPlayingIndex,
  setIsPlaying,
} from "../../store/actions";
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistItemsSelector,
  getPlaylistPLayingIndex,
  getIsPlaying,
} from "../../store/selectors";
import Loading from "../../utils/Loading";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";
import "./PlaylistDetails.scss";

const PlaylistDetails = (props) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const { id: playlistId, name: playlistName } = useParams();
  const dispatch = useDispatch();

  const audioSrc =
    props.userPlaylistTracks[props.playlistPlayingIndex]?.track?.preview_url;
  const audioRef = useRef(
    new Audio(props.userPlaylistTracks[0]?.track?.preview_url)
  );
  const intervalRef = useRef();

  //Call in order to get userPlaylistTracks
  useEffect(() => {
    props.getPlaylistItems(playlistId);
  }, [playlistId]);

  // On startTimer we created a watcher after deleted the previous
  //to see every second the progression of the track and if he is finished we switch isPlaying to false
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        props.setIsPlaying(!props.isPlaying);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };
  // We watch isPlaying status if it's true and playlist index exist, play song and start timer are launched
  // If he detect audioRef value but isPlaying status to false, the track is paused.
  // Else if no audioRef value but isPlaying status is true we assigned audioSrc (which value is set automatiquely depending
  // of playlistPlayingIndex store value to audioRef src and play song and start timer are launched
  // Else (no audioRef and isPlaying to false) the track is paused
  useEffect(() => {
    if (audioRef.current.src) {
      if (props.isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (props.isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [props.isPlaying]);

  //At each playlistPlayingIndex change (0 at the begining) we stop the previous track with previous index;
  // We assigned new AudioRef value with audioSrc (which value change with playlistPlayingIndex)
  // After we check if isReady is true , in order to doesnt play track the first time the page is loaded
  // If not we set the value to true on next lines at this moment every time isPlaying will be true the song will be played
  useEffect(() => {
    if (props.playlistPlayingIndex >= 0) {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef.current.currentTime);
      if (isReady) {
        audioRef.current.play();
        props.setIsPlaying(true);
        startTimer();
      } else {
        setIsReady(true);
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
  // we passed the index to the store to change the selected track(0 by default)
  const playSong = (index) => {
    props.setIsPlaying(!props.isPlaying);
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
                playSong={playSong}
                isPlaying={props.isPlaying}
                track={item.track}
                handleDelete={handleDeleteTrack}
                playingIndex={props.playlistPlayingIndex}
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
      <Footer />
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
    isPlaying: getIsPlaying(state),
  }),
  {
    getPlaylistItems,
    setPlayingIndex,
    setIsPlaying,
  }
)(PlaylistDetails);
