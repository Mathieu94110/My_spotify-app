import apiUserBrowseRequest from '../../conf/api.browse';

export const FETCH_NEW_RELEASES_SUCCESS = 'request fetch new releases success';
export const FETCH_NEW_RELEASES_ERROR = 'request fetch new releases error';

//New releases
export const fetchNewReleasesSuccess = (newReleases) => {
  return {
    type: FETCH_NEW_RELEASES_SUCCESS,
    newReleases,
  };
};

export const fetchNewReleasesError = (error) => {
  return {
    type: FETCH_NEW_RELEASES_ERROR,
    error
  };
};

export const getNewReleases = () => (dispatch) => {
  return apiUserBrowseRequest.fetchNewReleases().then(
    (newReleases) => dispatch(fetchNewReleasesSuccess(newReleases)),
    (error) => dispatch(fetchNewReleasesError(error))
  );
};

//

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    categories,
  };
};

export const fetchCategoriesError = (error) => {
  return {
    type: 'FETCH_CATEGORIES_ERROR',
    error
  };
};

export const fetchCategories = (accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/browse/categories`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
        }),
      }
    );
    fetch(request)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(fetchCategoriesSuccess(res.categories));
      })
      .catch((err) => {
        dispatch(fetchCategoriesError(err));
      });
  };
};

export const fetchFeaturedSuccess = (featured) => {
  return {
    type: 'FETCH_FEATURED_SUCCESS',
    featured,
  };
};

export const fetchFeaturedError = () => {
  return {
    type: 'FETCH_FEATURED_ERROR',
  };
};

export const fetchFeatured = (accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/browse/featured-playlists`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
        }),
      }
    );
    fetch(request)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(fetchFeaturedSuccess(res.playlists));
      })
      .catch((err) => {
        dispatch(fetchFeaturedError(err));
      });
  };
};
