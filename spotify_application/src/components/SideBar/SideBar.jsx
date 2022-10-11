import { useState } from "react";
import "./SideBar.css";
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
      <div className={open ? "sidebar" : "sidebar sidebar-closed"}>
        <div className="top-links">
          <div className="logo">
            <img
              src={spotifyLogo}
              alt="spotify"
              className={open ? "logo-img" : "logo-img-closed"}
            />
          </div>
          <button
            className={open ? "menu-toggle" : "menu-toggle menu-toggle-closed"}
            onClick={toggleOpen}
          >
            {open ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </button>
          <ul>
            <li>
              <NavLink to="/home" className="nav-link">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className={open ? "margin-left" : "display-none"}>
                  Accueil
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className="nav-link">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <span className={open ? "margin-left" : "display-none"}>
                  Rechercher
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/playlists" className="nav-link">
                <span>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span className={open ? "margin-left" : "display-none"}>
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
