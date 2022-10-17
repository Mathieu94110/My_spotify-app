import React, { useState } from "react";
import "./AddTrackModal.scss";

const AddTrackModal = ({
  setIsOpen,
  playlists,
  trackUri,
  addTrackToPlaylist,
}) => {
  const [checkedPlaylist, setCheckedPlaylist] = useState(false);

  const handleChange = (value) => {
    setCheckedPlaylist(value);
  };

  const AddTrackCallback = () => {
    addTrackToPlaylist(trackUri, checkedPlaylist);
  };

  return (
    <>
      <div className="add-track-modal">
        <div className="add-track-modal__modal">
          <div>
            <h2 className="add-track-modal__title">
              Ajouter le titre à une playlist
            </h2>
            <div className="add-track-modal__subtitle">
              Sélectionner la playlist
            </div>
          </div>
          <div className="add-track-modal__playlists">
            {playlists &&
              playlists.map((playlist, index) => {
                return (
                  <div key={index} className="add-track-modal__playlists-items">
                    <span>{playlist.name}</span>{" "}
                    <input
                      type="checkbox"
                      value={playlist.id}
                      checked={checkedPlaylist === playlist.id}
                      onChange={() => handleChange(playlist.id)}
                    ></input>
                  </div>
                );
              })}
          </div>
          <div>
            <div className="add-track-modal__actions">
              <button
                className="cancel-button"
                onClick={() => setIsOpen(false)}
              >
                Annuler
              </button>
              <button
                className="validate-button"
                onClick={() => AddTrackCallback()}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTrackModal;
