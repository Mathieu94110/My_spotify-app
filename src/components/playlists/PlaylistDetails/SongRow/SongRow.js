import Button from "../../../songsPlayer/Components/ControlButton";
import mysteryImage from "../../../../assets/images/question-mark.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./SongRow.scss";

function SongRow({ track, handleDelete, isPlaying, currentIndex, playSong }) {
  const { width } = useWindowDimensions();

  return (
    <div className="song-row">
      <Button
        className="song-row__player"
        onClick={() => playSong(currentIndex)}
        icon={isPlaying ? faPause : faPlay}
        playBtn
      />
      <img
        className="song-row__album"
        src={
          track.album.images[0]?.url ? track.album.images[0].url : mysteryImage
        }
        alt={track.name}
      />

      <h2> {width < 600 ? track.name.substring(0, 12) + "..." : track.name}</h2>
      <h3>
        {width < 600
          ? track.artists[0].name.substring(0, 12)
          : track.artists.map((artist) => artist.name).join(", ")}{" "}
        -{" "}
        {width < 600
          ? track.album.name.substring(0, 12) + "..."
          : track.album.name}
      </h3>
      <span>0:30</span>
      <DeleteIcon
        onClick={() => handleDelete({ track })}
        className="song-row__delete-icon"
      />
    </div>
  );
}

export default SongRow;
