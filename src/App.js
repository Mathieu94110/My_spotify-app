import './App.scss';
import Authentication from './pages/Authentication/Authentication';
import Home from './pages/Home/Home';
import Playlists from './pages/Playlists/Playlists';
import Search from './pages/Search/Search';
import Sidebar from './components/SideBar/SideBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { userIsLoggedIn } from './store/selectors';
import { connect } from 'react-redux';

function App(props) {
  return (
    <HashRouter>
      <div className="App">
        {props.isLoggedIn ? <Sidebar /> : null}
        <div className="App__screens">
          <Routes>
            <Route exact path="/" element={<Authentication />} />
            <Route exact path="/playlists" element={<Playlists />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </div>
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
