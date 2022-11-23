import React, { useState, useEffect } from 'react';
// import { selectDisplayName } from '../../store/user/userSlice';
import './Home.scss';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {
  lastActivityIsLoadingSelector,
  lastActivityListSelector,
} from '../../store/selectors';
// import { fetchRecentlyPlayed } from '../../store/redux/actions';
import { fetchRecentlyPlayed } from '../../store/user/user.actions';
import Recentlyplayed from '../../components/home/recentlyPlayed/recentlyPlayed/RecentlyPlayed';
import Loading from '../../components/utils/Loading';

const Home = (props) => {
  // const dispatch = useDispatch();
  // const [topArtists, setTopArtists] = useState([]);

  // const userName = useSelector(selectDisplayName);
  useEffect(() => {
    props.fetchRecentlyPlayed();
  }, []);
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="home">
          <h1 className="home__title">
            Bienvenue{' '}
            {/* {userName.charAt(0).toUpperCase() + userName.slice(1)} */}, vous
            êtes bien connecté sur votre plateforme Spotify
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
  }),
  {
    fetchRecentlyPlayed,
  }
)(Home);
