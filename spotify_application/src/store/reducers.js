import authorization from './authentication/authenticationSlice';
import user from './user/user.reducers';
import playlists from './playlists/playlists.reducers';
import artists from './artists/artistsSlice';

export default {
  authorization,
  user,
  playlists,
  artists,
};
