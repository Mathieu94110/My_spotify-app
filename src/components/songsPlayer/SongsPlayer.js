import React from "react";
import Button from "./Components/ControlButton";
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
      <div className="songs-player__buttons">
        <Button
          className="songs-player__button"
          icon={faBackward}
          onClick={props.previousSong}
        />
        <Button
          className="songs-player__button"
          onClick={props.playing ? props.pauseSong : props.playSong}
          icon={props.playing ? faPause : faPlay}
          playBtn
        />
        <Button
          className="songs-player__button"
          icon={faForward}
          onClick={props.nextSong}
        />
      </div>
    </div>
  );
};

export default SongsPlayer;
