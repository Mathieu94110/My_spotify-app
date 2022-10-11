import React from "react";
import "./App.css";
import Authentication from "./pages/authentication/authentication";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playlists from "./pages/playlists/playlists";
import Search from "./pages/search/search";
import Sidebar from "./components/SideBar/SideBar";
import { selectIsLoggedIn } from "./store/authentication/authenticationSlice";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Router>
      <div className="App">
        {isLoggedIn ? <Sidebar /> : null}
        <Routes>
          <Route exact path="/" element={<Authentication />} />
          <Route exact path="/playlists" element={<Playlists />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
