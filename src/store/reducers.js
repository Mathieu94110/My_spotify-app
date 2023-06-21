import authentication from './authentication/authentication.reducers';
import user from './user/user.reducers';
import playlists from './playlists/playlists.reducers';
import browse from './browse/browse.reducers';
import artists from './artists/artistsSlice';

export default {
  authentication,
  user,
  playlists,
  artists,
  browse
};
