import { useState, useRef } from "react";
import "./playlistAvatar.scss";

const playlistAvatar = ({ imageResult, setPlaylistImage, handleClick }) => {
  const [clicked, setClicked] = useState("");

  const searchedValue = useRef(null);
  const handleInputChange = (e) => {
    handleClick(e.target.value);
  };

  return (
    <div className="playlist-avatar-container">
      <div className="playlist-avatar-title">
        <h2>Choisir une image pour votre playlist</h2>
      </div>
      <div>
        <label>
          Avatar:
          <input
            type="text"
            id="outlined-basic"
            name="search"
            ref={searchedValue}
            onChange={handleInputChange}
            placeholder="Rechercher par artiste"
          />
        </label>
      </div>
      <div className="playlist-avatar-content">
        {imageResult.map((item, index) => (
          <img
            key={index}
            onClick={() => {
              setPlaylistImage({ picture: item.picture, uri: item.uri });
              setClicked(item.uri);
            }}
            src={item.picture}
            className={
              clicked === item.uri
                ? "playlist-avatar-image-selected"
                : "playlist-avatar-image"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default playlistAvatar;
