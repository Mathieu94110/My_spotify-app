import './RecentlyPlayed.scss';

const RecentlyPlayed = (props) => {
  return (
    <div className="recently-played">
      <h2 className="recently-played__title">Écouté dernièrement</h2>
      <div className="recently-played__content">
        {props.songs &&
          props.songs.map((track, index) => (
            <div className="recently-played__items" key={index}>
              <p>
                <img
                  src={track.albumArt}
                  alt="{track.album}"
                  style={{ width: '60px' }}
                />
              </p>
              <p className="recently-played__track-name">{track.name}</p>

              <p className="recently-played__track-artist">{track.artist}</p>
              <p className="recently-played__track-album">{track.album}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
