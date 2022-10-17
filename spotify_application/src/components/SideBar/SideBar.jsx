import { useState } from "react";
import "./SideBar.scss";
import spotifyLogo from "../../assets/images/spotify-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function Sidebar() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div>
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
              <NavLink to="/home" className="sidebar__nav-link">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span
                  className={
                    open
                      ? "sidebar__text-display"
                      : "sidebar__text-display-none"
                  }
                >
                  Accueil
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className="sidebar__nav-link">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <span
                  className={
                    open
                      ? "sidebar__text-display"
                      : "sidebar__text-display-none"
                  }
                >
                  Rechercher
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/playlists" className="nav-link">
                <span>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span
                  className={
                    open
                      ? "sidebar__text-display"
                      : "sidebar__text-display-none"
                  }
                >
                  {" "}
                  Vos playlists
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
