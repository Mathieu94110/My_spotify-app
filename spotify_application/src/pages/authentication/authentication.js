import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfile, setTokenInfo } from '../../store/actions';
import { userIsLoggedIn } from '../../store/selectors';
import { getAuthorizeHref } from '../../oauthConfig';
import { getHashParams, removeHashParamsFromUrl } from '../../utils/hashUtils';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './Authentication.scss';

// Here we register url values when getAuthorizeHref get the data from spotify api
const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
// We clean hash
removeHashParamsFromUrl();

const Authentication = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      // We sending access Token to localStorage and other values to reducers
      // localStorage.setItem('accessToken', access_token);
      // dispatch(setLoggedIn(true));
      dispatch(setTokenInfo(access_token, Date.now(expires_in)));
      // dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch(getUserProfile(access_token));
    }
  }, []);

  return (
    <div className="login">
      {!props.isLoggedIn ? (
        <button
          className="login__button"
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open(getAuthorizeHref(), '_self')}
        >
          Se connecter
        </button>
      ) : (
        <Navigate replace to="/home" />
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    isLoggedIn: userIsLoggedIn(state),
  }),
  {}
)(Authentication);
