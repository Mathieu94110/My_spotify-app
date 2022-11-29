import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import {
  lastActivityIsLoadingSelector,
  lastActivityListSelector,
  userInfosIsLoadingSelector,
  userInfosSelector,
  getNewReleasesListSelector,
  selectAccessToken,
} from '../../store/selectors';
import { fetchRecentlyPlayed, getNewReleases } from '../../store/actions';
import Recentlyplayed from '../../components/home/recentlyPlayed/recentlyPlayed/RecentlyPlayed';
import NewReleases from '../../components/home/newReleases/NewReleases';
import Loading from '../../components/utils/Loading';

const Home = ({
  isLoading,
  recentlyPlayed,
  userInfos,
  userInfosIsLoading,
  newAlbums,
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
              <NewReleases newReleases={newAlbums} />
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
    token: selectAccessToken(state),
    newAlbums: getNewReleasesListSelector(state),
  }),
  {
    fetchRecentlyPlayed,
    getNewReleases,
  }
)(Home);
