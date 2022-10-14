import React from "react";
import "./playlistAvatar.scss";

const playlistAvatar = ({ imageResult, setPlaylistImage }) => {
  const [clicked, setClicked] = React.useState("");
  return (
    <div className="playlist-avatar-container">
      {imageResult.length > 0 && (
        <>
          <div className="playlist-avatar-title">
            <h2>Choisir une image pour votre playlist</h2>
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
        </>
      )}
    </div>
  );
};

export default playlistAvatar;
