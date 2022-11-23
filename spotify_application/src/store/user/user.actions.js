import apiUserRequest from '../../conf/api.user';

export const REQUEST_LAST_ACTIVITY = 'request last activity';
export const FETCH_LAST_ACTIVITY = 'fetch last activity';
export const FETCH_LAST_ACTIVITY_SUCCESS = 'fetch last activity success';
export const FETCH_LAST_ACTIVITY_ERROR = 'fetch last activity error';

export const requestRecentActivity = () => ({
  type: REQUEST_LAST_ACTIVITY,
});

export const fetchRecentActivitySuccess = (recentlyPlayed) => ({
  type: FETCH_LAST_ACTIVITY_SUCCESS,
  recentlyPlayed,
});

export const fetchRecentActivityError = (error) => ({
  type: FETCH_LAST_ACTIVITY_ERROR,
  error,
});

// export const getLastActivity = () => (dispatch) => {
export const fetchRecentlyPlayed = () => (dispatch) => {
  dispatch(requestRecentActivity());
  return apiUserRequest.getLastActivity().then(
     (recentlyPlayed) => dispatch(fetchRecentActivitySuccess(recentlyPlayed)),
     (error) => dispatch(fetchRecentActivityError(error))
  );
};

// export const fetchRecentlyPlayed = () => (dispatch) => {
//   dispatch(requestRecentActivity());
//   return apiUserRequest.getLastActivity().then(async (response) => {
//     try {
//       const recentlyPlayed = [];
//       const map = new Map();
//       console.log(response);
//       for (let item of response) {
//         if (!map.has(item.track.name)) {
//           map.set(item.track.name, true);
//           recentlyPlayed.push({
//             name: item.track.name,
//             artist: item.track.artists[0].name,
//             album: item.track.album.name,
//             albumArt: item.track.album.images[0].url,
//           });
//         }
//       }
//       dispatch(fetchRecentActivitySuccess(recentlyPlayed));
//     } catch (error) {
//       dispatch(fetchRecentActivityError(error));
//       console.log(error);
//     }
//   });
// };
