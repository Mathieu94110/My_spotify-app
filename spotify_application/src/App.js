import React from 'react';
import './App.scss';
import Authentication from './pages/authentication/authentication';
import Home from './pages/home/Home';
import Playlists from './pages/playlists/Playlists';
import Search from './pages/search/Search';
import Sidebar from './components/SideBar/SideBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { userIsLoggedIn } from './store/selectors';
import { connect } from 'react-redux';

function App(props) {
  return (
    <HashRouter>
      <div className="App">
        {props.isLoggedIn ? <Sidebar /> : null}
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

export default connect(
  (state) => ({
    isLoggedIn: userIsLoggedIn(state),
  }),
  {}
)(App);
