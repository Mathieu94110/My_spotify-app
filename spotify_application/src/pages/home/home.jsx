import React, { useState, useEffect } from 'react';
// import { selectDisplayName } from '../../store/user/userSlice';
import './Home.scss';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import {
  lastActivityIsLoadingSelector,
  lastActivityListSelector,
} from '../../store/selectors';
import { getLastActivity } from '../../store/actions';
import Recentlyplayed from '../../components/home/recentlyPlayed/recentlyPlayed/RecentlyPlayed';
import Loading from '../../components/utils/Loading';

const Home = (props) => {
  // const [topArtists, setTopArtists] = useState([]);
  // const dispatch = useDispatch();

  // const userName = useSelector(selectDisplayName);
  useEffect(() => {
    props.getLastActivity();
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
          <Recentlyplayed songs={props.user} />
        </div>
      )}
    </>
  );
};

export default connect(
  (state) => ({
    isLoading: lastActivityIsLoadingSelector(state),
    user: lastActivityListSelector(state),
  }),
  {
    getLastActivity,
  }
)(Home);
