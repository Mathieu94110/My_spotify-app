import authorization from './authentication/authenticationSlice';
import user from './user/user.reducers';
// import user from './redux/reducer';
import playlists from './playlists/playlistsSlice';
import artists from './artists/artistsSlice';

export default {
  authorization,
  user,
  playlists,
  artists,
};
