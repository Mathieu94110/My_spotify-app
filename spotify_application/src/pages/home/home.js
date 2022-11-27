import React, { useEffect } from 'react';
import './Home.scss';
import { connect } from 'react-redux';
import {
  lastActivityIsLoadingSelector,
  lastActivityListSelector,
  userInfosIsLoadingSelector,
  userInfosSelector,
} from '../../store/selectors';
import { fetchRecentlyPlayed } from '../../store/actions';
import Recentlyplayed from '../../components/home/recentlyPlayed/recentlyPlayed/RecentlyPlayed';
import Loading from '../../components/utils/Loading';
const Home = (props) => {
  useEffect(() => {
    props.fetchRecentlyPlayed();
  }, []);
  return (
    <>
      {props.isLoading || props.userInfosIsLoading ? (
        <Loading />
      ) : (
        <div className="home">
          <h1 className="home__title">
            {`Bienvenue ${
              props.userInfos.display_name.charAt(0).toUpperCase() +
              props.userInfos.display_name.slice(1)
            } vous
            êtes bien connecté sur votre plateforme Spotify `}
          </h1>
          <div className="home__recent-container">
            <Recentlyplayed songs={props.recentlyPlayed} />
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
  }),
  {
    fetchRecentlyPlayed,
  }
)(Home);
