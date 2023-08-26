import SongsPlayer from "../songsPlayer/SongsPlayer";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <SongsPlayer
        playSong={props.playSong}
        isPlaying={props.isPlaying}
        playingIndex={props.playingIndex}
        previousSong={props.handlePrev}
        nextSong={props.handleNext}
        trackInfo={props.trackInfo}
      />
    </div>
  );
};

export default Footer;
