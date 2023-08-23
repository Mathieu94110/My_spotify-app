import React from "react";

import SongPlayer from "../songPlayer/SongPlayer";

const style = {
  width: "100%",
  background: "rgb(40, 40, 40)",
  height: 80,
  zIndex: 2000,
};

const Footer = (props) => (
  <div className="footer" style={style}>
    <SongPlayer />
  </div>
);

export default Footer;
