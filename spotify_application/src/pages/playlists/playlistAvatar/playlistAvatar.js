import React from "react";
import "./playlistAvatar.css";

const playlistAvatar = (props) => {
  const images = props.imageResult;

  return (
    <div className="playlist-avatar-container">
      {images.length > 0 && (
        <>
          <div className="playlist-avatar-title">
            {" "}
            <h2>Choisir une image pour votre playlist</h2>
          </div>
          <div className="playlist-avatar-content">
            {images.map((item, index) => (
              <div key={index}>
                <div>
                  <img
                    onClick={() => alert(item.uri)}
                    src={item.image}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default playlistAvatar;
