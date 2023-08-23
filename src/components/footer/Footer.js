import React, { useState } from "react";
import { getPlaylistItemsSelector } from "../../store/selectors";
import SongsPlayer from "../songsPlayer/SongsPlayer";
import "./Footer.scss";

const Footer = () => {
  const [playSong, setPlaySong] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pauseSong, setPauseSong] = useState(false);

  const previousSong = () => {
    console.log("previousSong");
  };

  const nextSong = () => {
    console.log("nextSong");
  };
  return (
    <div className="footer">
      <SongsPlayer
        playSong={playSong}
        playing={playing}
        pauseSong={pauseSong}
        previousSong={previousSong}
        nextSong={nextSong}
      />
    </div>
  );
};

export default Footer;
