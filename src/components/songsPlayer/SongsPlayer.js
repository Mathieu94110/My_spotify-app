import React from "react";
import Button from "./Components/ControlButton";
import { convertMsToMinutesSeconds } from "../../utils/convertMsToMinutesSeconds";
import {
  faBackward,
  faPause,
  faPlay,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import "./SongsPlayer.scss";

const SongsPlayer = ({
  handleNext,
  handlePrev,
  isPlaying,
  playSong,
  playingIndex,
  trackInfo,
}) => {
  return (
    <div className="songs-player">
      <div className="songs-player__content">
        <div className="songs-player__buttons">
          <Button
            className="songs-player__button songs-player__button--prev"
            icon={faBackward}
            color={"#fff"}
            onClick={handlePrev}
          />
          <Button
            className="songs-player__button songs-player__button--play"
            onClick={() => playSong(playingIndex)}
            icon={isPlaying ? faPause : faPlay}
            color={"#fff"}
            playBtn
          />
          <Button
            className="songs-player__button songs-player__button--next"
            icon={faForward}
            onClick={handleNext}
            color={"#fff"}
          />
        </div>
        {isPlaying ? (
          <div className="songs-player__track-info">
            <span>Titre:</span>
            <span data-testid="player-track-name">
              {trackInfo?.track?.name}
            </span>
            <span>Artiste:</span>{" "}
            <span>{trackInfo?.track?.artists[0]?.name}</span>
            <span>Durée: </span>
            <span>
              {convertMsToMinutesSeconds(trackInfo?.track?.duration_ms)}
            </span>
            <span>Album:</span>
            <span>{trackInfo?.track?.album?.name}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SongsPlayer;
