import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBarPageLink.scss";
const SideBarPageLink = ({ link, open, title, windowWidth, icon }) => {
  return (
    <>
      <NavLink to={link}>
        <span>
          <FontAwesomeIcon icon={icon} className="side-bar-page-link__icons" />
        </span>
        <span
          data-testid="sside-bar-page-link__text"
          className={
            open && windowWidth > 830
              ? "side-bar-page-link__text-display"
              : "side-bar-page-link__text-display--none"
          }
        >
          {title}
        </span>
      </NavLink>
    </>
  );
};

export default SideBarPageLink;
