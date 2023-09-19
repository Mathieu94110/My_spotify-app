import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBarPlaylists.scss";

const SideBarPlaylists = (props) => {
  const {userPlaylists, windowWidth, open} = props;
  return (
    <ul
      className={
        open && windowWidth > 800
          ? "side-bar-playlists"
          : "side-bar-playlists--none"
      }
    >
      {userPlaylists?.map((playlist, index) => (
        <li key={index}>
          <NavLink
            className="side-bar-playlists__item"
            to={"/playlistDetails/" + playlist.name + "/" + playlist.id}
          >
            {playlist.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default SideBarPlaylists;
