import "./SongRow.scss";
import mysteryImage from "../../../../assets/images/question-mark.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import Button from "../../../songsPlayer/Components/ControlButton";
import { faBan, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function SongRow({
  currentIndex,
  isPlaying,
  playSong,
  track,
  playingIndex,
  handleDelete,
}) {
  const { width } = useWindowDimensions();

  return (
    <div
      className={
        currentIndex === playingIndex && isPlaying
          ? "song-row song-row--active"
          : "song-row"
      }
    >
      {track.preview_url ? (
        <Button
          className="song-row__player"
          onClick={() => playSong(currentIndex)}
          icon={currentIndex === playingIndex && isPlaying ? faPause : faPlay}
          playBtn
          color={currentIndex === playingIndex && isPlaying ? "#000" : "#fff"}
        />
      ) : (
        <Button className="song-row__player" icon={faBan} />
      )}

      <img
        className="song-row__album"
        src={
          track.album?.images[0]?.url ? track.album.images[0].url : mysteryImage
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
        className={
          currentIndex === playingIndex && isPlaying
            ? "song-row__delete-icon song-row__delete-icon--black"
            : "song-row__delete-icon song-row__delete-icon--white"
        }
      />
    </div>
  );
}

export default SongRow;
