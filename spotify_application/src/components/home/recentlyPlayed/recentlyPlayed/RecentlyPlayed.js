import React, { useEffect } from 'react';
import './RecentlyPlayed.scss';
// import RecentlyPlayedSongs from "./recentlyPLayedSongs/RecentlyPlayedSongs";

const RecentlyPlayed = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const convertTime = (num) => {
    const minutes = Math.floor(num / 60000);
    const secondes = num % 60;
    return minutes + ':' + secondes;
  };

  return (
    <div className="recently-played">
      <h2 className="recently-played__title">Écouté dernièrement</h2>
      <div className="recently-played__content">
        {props.songs &&
          props.songs.map((item) => (
            <div className="recently-played__items" key={item.track.id}>
              <p>
                <img
                  src={item.track.album.images[2].url}
                  alt=""
                  style={{ width: '60px' }}
                />
              </p>
              <p className="recently-played__track-name">{item.track.name}</p>

              <p>{convertTime(item.track.duration_ms)}</p>
              <p>{new Date(item.played_at).toLocaleDateString('fr')}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
