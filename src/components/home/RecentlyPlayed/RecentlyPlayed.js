import "./RecentlyPlayed.scss";

const RecentlyPlayed = (props) => {
  return (
    <div className="recently-played">
      <h2 className="recently-played__title">Écouté dernièrement</h2>
      <div className="recently-played__content">
        {props.songs.length > 0 ? (
          props.songs.map((track, index) => (
            <div className="recently-played__items" key={index}>
              <p>
                <img
                  src={track.albumArt}
                  alt="{track.album}"
                  className="recently-played__img"
                />
              </p>
              <p className="recently-played__track-name">{track.name}</p>

              <p className="recently-played__track-artist">{track.artist}</p>
              <p className="recently-played__track-album">{track.album}</p>
            </div>
          ))
        ) : (
          <div className="recently-played__no-items">
            Vous n'avez rien écouté sur spotify dernièrement
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
