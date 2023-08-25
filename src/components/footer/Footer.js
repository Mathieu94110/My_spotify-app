import SongsPlayer from "../songsPlayer/SongsPlayer";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  getPlaylistItems,
  setPlayingIndex,
  setIsPlaying,
} from "../../store/actions";
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistItemsSelector,
  getPlaylistPLayingIndex,
  getIsPlaying,
} from "../../store/selectors";
import "./Footer.scss";

const Footer = (props) => {
  const [isReady, setIsReady] = useState(false);
  const { id: playlistId, name: playlistName } = useParams();
  const [trackProgress, setTrackProgress] = useState(0);
  const dispatch = useDispatch();

  const audioSrc =
    props.userPlaylistTracks[props.playlistPlayingIndex]?.track?.preview_url;
  const audioRef = useRef(
    new Audio(props.userPlaylistTracks[0]?.track?.preview_url)
  );
  const intervalRef = useRef();

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  //Call in order to get userPlaylistTracks
  useEffect(() => {
    props.getPlaylistItems(playlistId);
    console.log(audioRef);
  }, [playlistId]);

  // On startTimer we created a watcher after deleted the previous
  //to see every second the progression of the track and if it's finished we continue to
  //the next or if it's the end of the playlist we launch the first track
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
  //Here the logic is the same as PlaylistDetails page
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

  //Here the logic is the same as PlaylistDetails page
  useEffect(() => {
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
  }, [props.playlistPlayingIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
      props.isPlaying && props.setIsPlaying(!props.isPlaying);
    };
  }, []);

  const handleNext = () => {
    if (props.playlistPlayingIndex < props.userPlaylistTracks.length - 1) {
      props.setPlayingIndex(props.playlistPlayingIndex + 1);
    } else props.setPlayingIndex(0);
  };

  const handlePrev = () => {
    if (props.playlistPlayingIndex - 1 < 0)
      props.setPlayingIndex(props.userPlaylistTracks.length - 1);
    else props.setPlayingIndex(props.playlistPlayingIndex - 1);
  };

  const playSong = (index) => {
    props.setIsPlaying(!props.isPlaying);
    props.setPlayingIndex(index);
  };

  return (
    <div className="footer">
      {!props.isLoading && (
        <SongsPlayer
          playSong={playSong}
          isPlaying={props.isPlaying}
          playingIndex={props.playlistPlayingIndex}
          previousSong={handlePrev}
          nextSong={handleNext}
          trackInfo={props.userPlaylistTracks[props.playlistPlayingIndex]}
        />
      )}
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
)(Footer);
