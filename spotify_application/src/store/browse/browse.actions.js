import apiUserBrowseRequest from '../../conf/api.browse';

export const FETCH_NEW_RELEASES_SUCCESS = 'request fetch new releases success';
export const FETCH_NEW_RELEASES_ERROR = 'request fetch new releases error';
export const FETCH_CATEGORIES_SUCCESS = 'request fetch categories success';
export const FETCH_CATEGORIES_ERROR = 'request fetch categories error';
export const FETCH_FEATURED_SUCCESS = 'request fetch featured success';
export const FETCH_FEATURED_ERROR = 'request fetch featured error';
export const UPDATE_CATEGORY_TYPE = 'request update categories type';

//New releases
export const getNewReleasesSuccess = (newReleases) => {
  return {
    type: FETCH_NEW_RELEASES_SUCCESS,
    newReleases,
  };
};

export const getNewReleasesError = (error) => {
  return {
    type: FETCH_NEW_RELEASES_ERROR,
    error,
  };
};

export const getNewReleases = () => (dispatch) => {
  return apiUserBrowseRequest.fetchNewReleases().then(
    (newReleases) => dispatch(getNewReleasesSuccess(newReleases)),
    (error) => dispatch(getNewReleasesError(error))
  );
};

//////////////
//Get Browse categories

export const getCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  };
};

export const getCategoriesError = (error) => {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error,
  };
};

export const getCategories = () => (dispatch) => {
  return apiUserBrowseRequest.fetchCategories().then(
    (categories) => dispatch(getCategoriesSuccess(categories.categories)),
    (error) => dispatch(getCategoriesError(error))
  );
};
///////////////
export const getFeaturedSuccess = (featured) => {
  return {
    type: FETCH_FEATURED_SUCCESS,
    featured,
  };
};

export const getFeaturedError = () => {
  return {
    type: FETCH_FEATURED_ERROR,
  };
};

export const getFeatured = () => (dispatch) => {
  return apiUserBrowseRequest.fetchFeatured().then(
    (featured) => dispatch(getFeaturedSuccess(featured.playlists)),
    (error) => dispatch(getFeaturedError(error))
  );
};
// View type

export const updateCategoryType = (category) => {
  return {
    type: UPDATE_CATEGORY_TYPE,
    category,
  };
};
