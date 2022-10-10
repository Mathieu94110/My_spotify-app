import React from "react";
import "./App.css";
import Authentication from "./components/authentication/authentication";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playlists from "./components/playlists";
import Search from "./components/search/search";
import Sidebar from "./components/SideBar/SideBar";
import { selectIsLoggedIn } from "./components/authentication/authenticationSlice";
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
