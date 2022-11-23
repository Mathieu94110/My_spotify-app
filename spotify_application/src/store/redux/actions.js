import { FETCH_RECENTLY_PLAYED } from './types';
import spotifyApi from '../../conf/api.user';

export const fetchRecentlyPlayed = () => (dispatch) => {
  spotifyApi.getLastActivity().then(async (response) => {
    console.log(response);
    const recentlyPlayed = [];
    const map = new Map();
    for (let item of response) {
      if (!map.has(item.track.name)) {
        map.set(item.track.name, true);
        recentlyPlayed.push({
          name: item.track.name,
          artist: item.track.artists[0].name,
          album: item.track.album.name,
          albumArt: item.track.album.images[0].url,
        });
      }
    }

    dispatch({
      type: FETCH_RECENTLY_PLAYED,
      payload: recentlyPlayed.slice(0, 5),
    });
  });
};
