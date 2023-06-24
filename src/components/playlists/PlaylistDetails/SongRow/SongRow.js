import './SongRow.scss';
import mysteryImage from '../../../../assets/images/question-mark.jpg';

function SongRow({ track }) {
  return (
    <div className="song-row">
      <img
        className="song-row__album"
        src={
          track.album.images[0]?.url ? track.album.images[0].url : mysteryImage
        }
        alt={track.name}
      />
      <div className="song-row__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')} -{' '}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
