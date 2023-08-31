import "./App.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import Search from "./pages/Search/Search";
import SideBar from "./components/side-bar/SideBar";
import PlaylistDetails from "./pages/PlaylistDetails/PlaylistDetails";
import { HashRouter, Routes, Route } from "react-router-dom";
import { userIsLoggedIn } from "./store/selectors";
import { connect } from "react-redux";
import { useEffect } from "react";
import { selectUserInfos } from "./store/user/userSlice";
import { useSelector } from "react-redux";

function App() {
  const isUserInfos = useSelector(selectUserInfos);
  return (
    <HashRouter>
      <div className="app">
        <div
          className={
            !isUserInfos ? "app__body" : "app__body app__body--logged-in"
          }
        >
          {/* {isUserInfos ? <SideBar /> : null} */}

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            {/*             <Route exact path="/playlists" element={<Playlists />} />
            <Route
              path="/playlistDetails/:name/:id"
              element={<PlaylistDetails />}
            />
            <Route exact path="/search" element={<Search />} />  */}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
