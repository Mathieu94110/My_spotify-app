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

const SongsPlayer = (props) => {
  return (
    <div className="songs-player">
      <div className="songs-player__content">
        <div className="songs-player__buttons">
          <Button
            className="songs-player__button songs-player__button--prev"
            icon={faBackward}
            color={"#fff"}
            onClick={props.previousSong}
          />
          <Button
            className="songs-player__button songs-player__button--play"
            onClick={() => props.playSong(props.playingIndex)}
            icon={props.isPlaying ? faPause : faPlay}
            color={"#fff"}
            playBtn
          />
          <Button
            className="songs-player__button songs-player__button--next"
            icon={faForward}
            onClick={props.nextSong}
            color={"#fff"}
          />
        </div>
        {props.isPlaying && (
          <div className="songs-player__track-info">
            <span>Titre:</span>
            <span>{props.trackInfo?.track?.name}</span>
            <span>Artiste:</span>{" "}
            <span>{props.trackInfo?.track?.artists[0]?.name}</span>
            <span>Durée: </span>
            <span>
              {convertMsToMinutesSeconds(props.trackInfo?.track?.duration_ms)}
            </span>
            <span>Album:</span>
            <span>{props.trackInfo?.track?.album?.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongsPlayer;
