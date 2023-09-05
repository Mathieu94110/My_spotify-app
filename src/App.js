import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Playlists from "./pages/Playlists/Playlists";
import Search from "./pages/Search/Search";
import SideBar from "./components/side-bar/SideBar";
import PlaylistDetails from "./pages/PlaylistDetails/PlaylistDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectIsUserLoggedIn } from "./store/user/userSlice";
import { useAppSelector } from "./store/hooks";
import "./App.scss";

function App() {
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  return (
    <BrowserRouter>
      <div className="app">
        <div
          className={
            !isUserLoggedIn ? "app__body" : "app__body app__body--logged-in"
          }
        >
          {isUserLoggedIn ? <SideBar /> : null}

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/playlists" element={<Playlists />} />
            <Route
              path="/playlistDetails/:name/:id"
              element={<PlaylistDetails />}
            />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
