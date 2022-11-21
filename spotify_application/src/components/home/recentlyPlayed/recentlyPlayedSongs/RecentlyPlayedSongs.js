import React from "react";
import "./RecentlyPlayedSongs.scss";

const RecentlyPlayedSongs = (props) => {
  console.log(props);
  const convertDuration = (milliseconds) => {
    let minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (seconds.toString().length === 1) {
      seconds = `0${seconds}`;
    }
    return `${minute}:${seconds}`;
  };
  return (
    <div className="recently-played-songs">
      <div className="recently-played-songs__items-large">
        <span className="recently-played-songs__keys">Titre:</span>{" "}
        <span className="recently-played-songs__values">
          {props.song.track.name}
        </span>
      </div>
      <div className="recently-played-songs__items-large">
        <span className="recently-played-songs__keys">Album:</span>{" "}
        <span className="recently-played-songs__values">
          {props.song.track.album.name}
        </span>
      </div>
      <div className="recently-played-songs__items">
        <span className="recently-played-songs__keys">Titre numéro:</span>{" "}
        <span className="recently-played-songs__values">
          {props.song.track.track_number}
        </span>
      </div>
      <div className="recently-played-songs__items">
        <span className="recently-played-songs__keys">Durée:</span>{" "}
        <span className="recently-played-songs__values">
          {convertDuration(props.song.track.duration_ms)}
        </span>
      </div>
      <div className="recently-played-songs__items">
        <span className="recently-played-songs__keys">Popularité:</span>{" "}
        <span className="recently-played-songs__values">
          {props.song.track.popularity}
        </span>
      </div>
      <div className="recently-played-songs__items">
        <img
          src={props.song.track.album.images[0].url}
          alt={props.song.track.album.name}
          style={{ height: "50px" }}
        />
      </div>
    </div>
  );
};

export default RecentlyPlayedSongs;
