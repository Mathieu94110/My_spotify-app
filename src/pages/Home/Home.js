import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getUserRecentlyPlayed,
  selectRecentlyPlayed,
  selectUserInfos,
} from "../../store/user/userSlice";
import { getNewReleases, selectView } from "../../store/browse/browseSlice";
import Recentlyplayed from "../../components/home/RecentlyPlayed/RecentlyPlayed";
import BrowseCategories from "../../components/home/browse/BrowseCategories/BrowseCategories";
import BrowseContent from "../../components/home/browse/BrowseContent/BrowseContent";
import Loading from "../../layout/Loading/Loading";
import "./Home.scss";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserRecentlyPlayed());
    dispatch(getNewReleases());
  }, []);

  const userInfos = useAppSelector(selectUserInfos);
  const recentlyPlayed = useAppSelector(selectRecentlyPlayed);
  const view = useAppSelector(selectView);

  return (
    <div className="home">
      {!recentlyPlayed || !view ? (
        <div className="home__loading">
          <Loading />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Home;
