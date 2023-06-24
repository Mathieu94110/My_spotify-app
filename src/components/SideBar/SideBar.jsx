import { useState, useEffect } from 'react';
import spotifyLogo from '../../assets/images/spotify-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faMagnifyingGlass,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { getPlaylists } from '../../store/actions';
import { getPlaylistsListSelector } from '../../store/selectors';
import { connect } from 'react-redux';
import Loading from '../../utils/Loading';
import './SideBar.scss';

function Sidebar(props) {
  const [open, setopen] = useState(true);

  const toggleOpen = () => {
    setopen(!open);
  };

  useEffect(() => {
    props.getPlaylists();
  }, []);


  return (
    <div>
      <div className={open ? 'sidebar' : 'sidebar sidebar--closed'}>
        <div className="sidebar__top-links">
          <div className="sidebar__logo">
            <img
              src={spotifyLogo}
              alt="spotify"
              className={
                open
                  ? 'sidebar__logo-img'
                  : 'sidebar__logo-img sidebar__logo-img--closed'
              }
            />
          </div>
          <button
            className={
              open
                ? 'sidebar__menu-toggle'
                : 'sidebar__menu-toggle sidebar__menu-toggle--closed'
            }
            onClick={toggleOpen}
          >
            {open ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </button>
          <ul className="sidebar__list-items">
            <li>
              <NavLink to="/home">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span
                  className={
                    open
                      ? 'sidebar__text-display'
                      : 'sidebar__text-display-none'
                  }
                >
                  Accueil
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <span
                  className={
                    open
                      ? 'sidebar__text-display'
                      : 'sidebar__text-display-none'
                  }
                >
                  Rechercher
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/playlists">
                <span>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span
                  className={
                    open
                      ? 'sidebar__text-display'
                      : 'sidebar__text-display-none'
                  }
                >
                  {' '}
                  Vos playlists
                </span>
              </NavLink>
            </li>
          </ul>
          <strong className="sidebar__title"></strong>
          <hr />
          {props.isLoading ? (
            <Loading />
          ) : (
            <ul>
              {props.userPlaylists?.map((playlist) => (
                <li key={playlist.id}>
                <NavLink
                  className="sidebar__playlists"
                  to={'/playlistDetails/' + playlist.name + '/'  +playlist.id}
                >
                  {playlist.name}
                </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    userPlaylists: getPlaylistsListSelector(state),
  }),
  {
    getPlaylists,
  }
)(Sidebar);
