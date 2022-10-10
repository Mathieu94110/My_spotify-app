import React from "react";
import "./SideBar.css";
import spotifyLogo from "../images/spotify-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass, faFolder } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="container">
      <div className="top-links">
        <div className="logo">
          <img
            src={spotifyLogo}
            alt="spotify"
          />
        </div>
        <ul>
          <li>
          <FontAwesomeIcon icon={faHome} />
          <NavLink to="/home" 
          className="nav-link">Accueil</NavLink>
          </li>
          <li>
            
 
 
<FontAwesomeIcon icon={faMagnifyingGlass}/>
<NavLink to="/search" 
          className="nav-link">Rechercher</NavLink>
          </li>
          <li>
          <FontAwesomeIcon icon={faFolder} />
          <NavLink to="/playlists" 
          className="nav-link">Vos playlists</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

