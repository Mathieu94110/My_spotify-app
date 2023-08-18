import { useEffect } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import {
  lastActivityIsLoadingSelector,
  lastActivityListSelector,
  // userInfosIsLoadingSelector,
  userInfosSelector,
  getBrowseCategoryListSelector,
} from "../../store/selectors";
import {
  fetchRecentlyPlayed,
  getNewReleases,
  getCategories,
  getFeatured,
  updateCategoryType,
} from "../../store/actions";
import Recentlyplayed from "../../components/home/RecentlyPlayed/RecentlyPlayed";
import BrowseCategories from "../../components/home/browse/BrowseCategories/BrowseCategories";
import BrowseContent from "../../components/home/browse/BrowseContent/BrowseContent";
import Loading from "../../utils/Loading";

const Home = ({
  isLoading,
  recentlyPlayed,
  userInfos,
  /*   userInfosIsLoading, */
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
      {isLoading /* || userInfosIsLoading */ ? (
        <Loading />
      ) : (
        <div className="home">
          <h1 className="home__title">
            {`Bienvenue ${
              userInfos?.display_name?.charAt(0).toUpperCase() +
              userInfos?.display_name?.slice(1)
            } vous
            êtes bien connecté sur votre plateforme Spotify `}
          </h1>
          <div className="home__categories-container">
            <div className="home__categories">
              <div className="home__categories-items">
                <Recentlyplayed songs={recentlyPlayed} />
              </div>
              <div className="home__categories-items">
                <BrowseCategories />
                <BrowseContent newReleases={view} />
              </div>
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
    // userInfosIsLoading: userInfosIsLoadingSelector(state),
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
