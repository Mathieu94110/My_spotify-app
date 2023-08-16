import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile, setTokenInfo } from "../../store/actions";
import { userIsLoggedIn } from "../../store/selectors";
import { handleLogin } from "../../OauthConfig";
import { getHashParams, removeHashParamsFromUrl } from "../../utils/hashUtils";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.scss";

// Here we register url values when getAuthorizeHref get the data from spotify api
const hashParams = getHashParams();
const access_token_params = hashParams.access_token;
const expires_in_params = hashParams.expires_in;
// We clean hash
removeHashParamsFromUrl();

const Authentication = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!access_token_params || !expires_in_params) {
      console.error("There was an error during the authentication");
    } else {
      const tokenExpirationSec = new Date().getTime() / 1000 + 3600,
        tokenExpirationTime = new Date(tokenExpirationSec * 1000);
      localStorage.setItem("accessToken", access_token_params);
      localStorage.setItem("spotifyExpiresIn", tokenExpirationTime);
      dispatch(setTokenInfo(access_token_params, tokenExpirationTime));
      dispatch(getUserProfile(access_token_params));
    }
  }, []);

  return (
    <div className="login">
      {!props.isLoggedIn ? (
        <>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify logo"
            className="login__img"
          />
          <button
            className="login__button"
            aria-label="Log in using OAuth 2.0"
            onClick={handleLogin}
          >
            Se connecter
          </button>
        </>
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
