import React from "react";
import "./SideBar.css";
import spotifyLogo from "../images/spotify-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass, faFolder } from '@fortawesome/free-solid-svg-icons'

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
            <span>Accueil</span>
          </li>
          <li>
            
 
 
<FontAwesomeIcon icon={faMagnifyingGlass}/>
            <span>Rechercher</span>
          </li>
          <li>
          <FontAwesomeIcon icon={faFolder} />
            <span>Vos playlists</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

