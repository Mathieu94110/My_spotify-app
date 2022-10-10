import React from "react";
import "./App.css";
import Authentication from "./components/authentication/authentication";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playlists from "./components/playlists";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Authentication />} />
          <Route exact path="/playlists" element={<Playlists />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
