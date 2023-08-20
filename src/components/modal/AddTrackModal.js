import React, { useState } from "react";
import "./AddTrackModal.scss";

const AddTrackModal = ({ setIsOpen, playlists, track, addTrackToPlaylist }) => {
  const [checkedPlaylist, setCheckedPlaylist] = useState(null);

  const handleChange = (value) => {
    setCheckedPlaylist(value);
  };

  const handleClick = () => {
    addTrackToPlaylist(track, checkedPlaylist);
  };

  return (
    <>
      <div className="add-track-modal">
        <div className="add-track-modal__modal">
          <div>
            <h2 className="add-track-modal__title">
              Ajouter le titre à une playlist
            </h2>
          </div>
          <div className="add-track-modal__playlists">
            {playlists &&
              playlists.map((playlist, index) => {
                return (
                  <div key={index} className="add-track-modal__playlists-items">
                    <span className="add-track-modal__playlists-name">
                      {playlist.name}
                    </span>
                    <input
                      type="checkbox"
                      className="add-track-modal__checkboxes"
                      value={playlist.id}
                      checked={checkedPlaylist === playlist}
                      onChange={() => handleChange(playlist)}
                    ></input>
                  </div>
                );
              })}
          </div>
          <div>
            <div className="add-track-modal__actions">
              <button
                className="add-track-modal__button add-track-modal__button--cancel"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
              {checkedPlaylist && (
                <button
                  className="add-track-modal__button add-track-modal__button--validate"
                  onClick={() => handleClick()}
                >
                  &#10003;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTrackModal;
