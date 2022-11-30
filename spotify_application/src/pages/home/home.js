import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import {
  lastActivityIsLoadingSelector,
  lastActivityListSelector,
  userInfosIsLoadingSelector,
  userInfosSelector,
  getBrowseCategoryListSelector,
} from '../../store/selectors';
import {
  fetchRecentlyPlayed,
  getNewReleases,
  getCategories,
  getFeatured,
  updateCategoryType,
} from '../../store/actions';
import Recentlyplayed from '../../components/home/recentlyPlayed/RecentlyPlayed';
import BrowseCategories from '../../components/home/browse/browseCategories/BrowseCategories';
import BrowseContent from '../../components/home/browse/browseContent/BrowseContent';
import Loading from '../../components/utils/Loading';

const Home = ({
  isLoading,
  recentlyPlayed,
  userInfos,
  userInfosIsLoading,
  view,
  fetchRecentlyPlayed,
  getNewReleases,
}) => {
  useEffect(() => {
    fetchRecentlyPlayed();
    getNewReleases();
  }, []);
  return (
    <>
      {isLoading || userInfosIsLoading ? (
        <Loading />
      ) : (
        <div className="home">
          <h1 className="home__title">
            {`Bienvenue ${
              userInfos.display_name.charAt(0).toUpperCase() +
              userInfos.display_name.slice(1)
            } vous
            êtes bien connecté sur votre plateforme Spotify `}
          </h1>
          <div className="home__rubriks-container">
            <div className="home__recent-container">
              <Recentlyplayed songs={recentlyPlayed} />
            </div>
            <div className="home__recent-container">
              <BrowseCategories />
              <BrowseContent newReleases={view} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => ({
    isLoading: lastActivityIsLoadingSelector(state),
    recentlyPlayed: lastActivityListSelector(state),
    userInfos: userInfosSelector(state),
    userInfosIsLoading: userInfosIsLoadingSelector(state),
    view: getBrowseCategoryListSelector(state),
  }),
  {
    fetchRecentlyPlayed,
    getNewReleases,
    getCategories,
    getFeatured,
    updateCategoryType,
  }
)(Home);