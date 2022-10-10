import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
} from './authenticationSlice';
import { setUserProfileAsync } from '../user/userSlice';
import { getAuthorizeHref } from '../../oauthConfig';
import { getHashParams, removeHashParamsFromUrl } from '../../utils/hashUtils';
import {
  Navigate,
} from "react-router-dom";
import "./authentication.css";

// Here we register url values when getAuthorizeHref get the data from spotify api
const hashParams = getHashParams();
const access_token = hashParams.access_token;
const expires_in = hashParams.expires_in;
// We clean hash
removeHashParamsFromUrl();

const Authentication = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (access_token) {
      // We sending access Token to localStorage and other values to reducers
      localStorage.setItem("accessToken",access_token )
      dispatch(setLoggedIn(true));
      dispatch(setAccessToken(access_token));
      dispatch(setTokenExpiryDate(Number(expires_in)));
      dispatch(setUserProfileAsync(access_token));
    }
  }, []);

  return (
      <div className="login-page">
        {!isLoggedIn &&
          <button
          className="login-button"
          aria-label="Log in using OAuth 2.0"
          onClick={() => window.open(getAuthorizeHref(), '_self')}
          >
          Se connecter
          </button>}
        {
        //When logged we navigate to home
        isLoggedIn && <Navigate replace to="/home" />}
      </div>
  );
}

export default Authentication;