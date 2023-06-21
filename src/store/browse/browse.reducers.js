import * as actions from './browse.actions';

export default (
  state = {
    view: [],
    fetchNewReleasesError: false,
    viewType: 'New Releases',
  },
  action
) => {
  switch (action.type) {
    case actions.FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        view: action.newReleases,
        fetchNewReleasesError: false,
      };

    case actions.FETCH_NEW_RELEASES_ERROR:
      return {
        ...state,
        fetchNewReleasesError: true,
      };

    case actions.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        view: action.categories.items,
        fetchCategoriesError: false,
      };

    case actions.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        fetchCategoriesError: true,
      };

    case actions.FETCH_FEATURED_SUCCESS:
      return {
        ...state,
        view: action.featured.items,
        fetchFeaturedError: false,
      };

    case actions.FETCH_FEATURED_ERROR:
      return {
        ...state,
        fetchFeaturedError: true,
      };
    case actions.UPDATE_CATEGORY_TYPE:
      return {
        ...state,
        viewType: action.category,
      };
    default:
      return state;
  }
};
