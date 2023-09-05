import SongsPlayer from "../songsPlayer/SongsPlayer";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <SongsPlayer {...props} />
    </div>
  );
};

export default Footer;
