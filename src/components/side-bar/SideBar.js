import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarPlaylists from "./Components/SideBarPlaylists/SideBarPlaylists";
import SideBarPageLink from "./Components/SideBarPageLink/SideBarPageLink";
import {
  selectUserPlaylists,
  getPlaylists,
} from "../../store/playlists/playlistsSlice";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import spotifyLogo from "../../assets/images/spotify-logo.png";
import {
  faHome,
  faMagnifyingGlass,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.scss";

function SideBar() {
  const [open, setopen] = useState(true);
  const { width } = useWindowDimensions();
  const toggleOpen = () => {
    setopen(!open);
  };
  const dispatch = useDispatch();
  const userPlaylists = useSelector(selectUserPlaylists);
  useEffect(() => {
    dispatch(getPlaylists());
  }, []);

  const pageLinks = [
    { link: "/home", title: "Accueil", open, windowWidth: width, icon: faHome },
    {
      link: "/search",
      title: "Rechercher",
      open,
      windowWidth: width,
      icon: faMagnifyingGlass,
    },
    {
      link: "/playlists",
      title: "Vos playlists",
      open,
      windowWidth: width,
      icon: faFolder,
    },
  ];

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
          {pageLinks.map((link, index) => {
            return (
              <li key={index}>
                <SideBarPageLink
                  link={link.link}
                  title={link.title}
                  open={link.open}
                  windowWidth={link.windowWidth}
                  icon={link.icon}
                />
              </li>
            );
          })}
        </ul>
        {width > 800 && (
          <>
            <strong></strong>
            <hr />
          </>
        )}
        <SideBarPlaylists
          userPlaylists={userPlaylists}
          windowWidth={width}
          open={open}
        />
      </div>
    </div>
  );
}

export default SideBar;
