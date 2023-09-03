import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import SongRow from "../../components/playlists/PlaylistDetails/SongRow/SongRow";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Footer from "../../components/footer/Footer";
import Loading from "../../utils/Loading";
import { toast, ToastContainer } from "react-toastify";
import {
  getPlaylistItems,
  selectIsPlaying,
  selectIsPlaylistsLoading,
  selectUserPlaylistsTracks,
  selectPlayingIndex,
  setPlayingIndex,
  setIsPlaying,
  removeTrackFromPlaylist,
} from "../../store/playlists/playlistsSlice";
import "./PlaylistDetails.scss";

const PlaylistDetails = () => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const { id: playlistId, name: playlistName } = useParams();
  const intervalRef = useRef();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isPlaying = useAppSelector(selectIsPlaying);
  const isLoading = useAppSelector(selectIsPlaylistsLoading);
  const userPlaylistTracks = useAppSelector(selectUserPlaylistsTracks);
  const playlistPlayingIndex = useAppSelector(selectPlayingIndex);
  let audioSrc = userPlaylistTracks[playlistPlayingIndex]?.track?.preview_url;
  const audioRef = useRef(new Audio(userPlaylistTracks[0]?.track?.preview_url));

  //Call in order to get userPlaylistTracks
  useEffect(() => {
    dispatch(getPlaylistItems(playlistId));
  }, [playlistId]);

  // Here we reset isReady and isPlaying to false on onmounting to prevent first track loading when we navigate between playlists
  useEffect(() => {
    return () => {
      // when user leave the page the music is paused and index go back to 0
      setIsReady(false);
      dispatch(setPlayingIndex(0));
      dispatch(setIsPlaying(false));
    };
  }, [location]);

  // We watch isPlaying status if it's true and audio source exist, play song and start timer are launched
  // If he detect audioRef value but isPlaying status to false, the track is paused.
  // Else if no audioRef value but isPlaying status is true we assigned audioSrc (which value is set automatiquely depending
  // of playlistPlayingIndex store value to audioRef src and play song and start timer are launched
  // Else (no audioRef and isPlaying to false) the track is paused
  useEffect(() => {
    if (audioRef.current.src && isReady) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying && isReady) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    configurePlayMode();
  }, [playlistPlayingIndex, userPlaylistTracks]); //audioSrc depending on those 2 values

  //At each playlistPlayingIndex change (0 at the begining) we stop the previous track with previous index;
  // We assigned new AudioRef value with audioSrc (which value change with playlistPlayingIndex)
  // After we check if isReady is true , in order to doesnt play track the first time the page is loaded
  // If not we set the value to true on next lines at this moment every time isPlaying will be true the song will be played
  const configurePlayMode = () => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    if (isReady) {
      audioRef.current.play();
      dispatch(setIsPlaying(true));
      startTimer();
    } else {
      setIsReady(true);
    }
  };

  // On startTimer we created a watcher after deleted the previous
  //to see every second the progression of the track and if he is finished we continue playing with next track
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const handleDeleteTrack = (track) => {
    const { uri: trackUri, name: trackName } = track.track;
    dispatch(removeTrackFromPlaylist({ trackUri, playlistId }))
      .then(() => {
        dispatch(getPlaylistItems(playlistId));
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
    dispatch(setIsPlaying(!isPlaying));
    dispatch(setPlayingIndex(index));
  };

  const handleNext = () => {
    if (playlistPlayingIndex < userPlaylistTracks.length - 1) {
      dispatch(setPlayingIndex(playlistPlayingIndex + 1));
    } else dispatch(setPlayingIndex(0));
  };

  const handlePrev = () => {
    if (playlistPlayingIndex - 1 < 0)
      dispatch(setPlayingIndex(userPlaylistTracks.length - 1));
    else dispatch(setPlayingIndex(playlistPlayingIndex - 1));
  };

  return (
    <div className="playlistDetails">
      <h1>{playlistName}</h1>
      <div className="playlistDetails__tracks">
        {!isLoading ? (
          userPlaylistTracks.length > 0 ? (
            userPlaylistTracks?.map((item, index) => (
              <SongRow
                key={index}
                currentIndex={index}
                playSong={playSong}
                isPlaying={isPlaying}
                track={item.track}
                handleDelete={handleDeleteTrack}
                playingIndex={playlistPlayingIndex}
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
      {!isLoading && userPlaylistTracks.length > 0 && (
        <Footer
          trackInfo={userPlaylistTracks[playlistPlayingIndex]}
          playingIndex={playlistPlayingIndex}
          isPlaying={isPlaying}
          playSong={playSong}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
      {/* Tag below is necessary to display toast message*/}
      <ToastContainer />
    </div>
  );
};

export default PlaylistDetails;
