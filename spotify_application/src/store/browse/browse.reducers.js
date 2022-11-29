import * as actions from './browse.actions';

export default (
  state = {
    data: [],
    fetchNewReleasesError: false,
  },
  action
) => {
  switch (action.type) {
    case actions.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        data: action.newReleases,
        fetchNewReleasesError: false,
      };

    case actions.FETCH_NEW_RELEASES_ERROR:
      return {
        ...state,
        fetchNewReleasesError: true,
      };
    default:
      return state;
  }
};
