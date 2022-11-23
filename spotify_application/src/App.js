import React from 'react';
import './App.scss';
import Authentication from './pages/authentication/authentication';
import Home from './pages/home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Playlists from './pages/playlists/Playlists';
import Search from './pages/search/Search';
import Sidebar from './components/SideBar/SideBar';
import { selectIsLoggedIn } from './store/authentication/authenticationSlice';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HashRouter>
      <div className="App">
        {isLoggedIn ? <Sidebar /> : null}
        <Routes>
          <Route exact path="/" element={<Authentication />} />
          <Route exact path="/playlists" element={<Playlists />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
