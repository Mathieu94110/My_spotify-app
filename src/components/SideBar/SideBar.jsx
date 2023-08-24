import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { getPlaylists } from "../../store/actions";
import { getPlaylistsSelector } from "../../store/selectors";
import { connect } from "react-redux";
import Loading from "../../utils/Loading";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import spotifyLogo from "../../assets/images/spotify-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.scss";

function SideBar(props) {
  const [open, setopen] = useState(true);
  const { width } = useWindowDimensions();
  const toggleOpen = () => {
    setopen(!open);
  };

  useEffect(() => {
    props.getPlaylists();
  }, []);

  return (
    <div className={open ? "sidebar" : "sidebar sidebar--closed"}>
      <div className="sidebar__top-links">
        <div className="sidebar__logo">
          <img
            src={spotifyLogo}
            alt="spotify"
            className={
              open
                ? "sidebar__logo-img"
                : "sidebar__logo-img sidebar__logo-img--closed"
            }
          />
        </div>
        <button
          data-testid="sidebar-menu-toggle"
          className={
            open
              ? "sidebar__menu-toggle"
              : "sidebar__menu-toggle sidebar__menu-toggle--closed"
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
                <FontAwesomeIcon icon={faHome} className="sidebar__icons" />
              </span>
              <span
                data-testid="sidebar-menu-text"
                className={
                  open && width > 830
                    ? "sidebar__text-display"
                    : "sidebar__text-display--none"
                }
              >
                Accueil
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="sidebar__icons"
                />
              </span>
              <span
                data-testid="sidebar-menu-text"
                className={
                  open && width > 830
                    ? "sidebar__text-display"
                    : "sidebar__text-display--none"
                }
              >
                Rechercher
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlists">
              <span>
                <FontAwesomeIcon icon={faFolder} className="sidebar__icons" />
              </span>
              <span
                data-testid="sidebar-menu-text"
                className={
                  open && width > 830
                    ? "sidebar__text-display"
                    : "sidebar__text-display--none"
                }
              >
                Vos playlists
              </span>
            </NavLink>
          </li>
        </ul>
        {width > 800 && (
          <>
            <strong className="sidebar__title"></strong>
            <hr />
          </>
        )}
        {props.isLoading ? (
          <Loading />
        ) : (
          <ul
            className={
              open && width > 800
                ? "sidebar__playlist-items"
                : "sidebar__playlist-items--none"
            }
          >
            {props.userPlaylists?.map((playlist) => (
              <li key={playlist.id}>
                <NavLink
                  className="sidebar__playlist-item"
                  to={"/playlistDetails/" + playlist.name + "/" + playlist.id}
                >
                  {playlist.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    userPlaylists: getPlaylistsSelector(state),
  }),
  {
    getPlaylists,
  }
)(SideBar);
