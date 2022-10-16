import React, { useState, useRef } from "react";
import "./modal.css";
import { addTrack } from "../../store/playlists/playlistsSlice";
import { useDispatch } from "react-redux";

const Modal = ({ setIsOpen, playlists, trackUri }) => {
  const [checkedPlaylist, setCheckedPlaylist] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setCheckedPlaylist(value);
  };

  const AddTrackToPlaylist = () => {
    dispatch(addTrack({ trackUri, checkedPlaylist }));
  };

  return (
    <>
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Ajouter le titre à une playlist</h5>
          </div>
          <div className="modalContent">Sélectionner la playlist</div>
          <div
            style={{
              width: "100%",
              height: "220px",
              overflowY: "auto",
            }}
          >
            {playlists &&
              playlists.map((playlist, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{playlist.name}</span>{" "}
                    <input
                      name={playlist.uri}
                      type="checkbox"
                      value={playlist.uri}
                      checked={checkedPlaylist === playlist.uri}
                      onChange={() => handleChange(playlist.uri)}
                    ></input>
                  </div>
                );
              })}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="cancel-button"
                onClick={() => setIsOpen(false)}
              >
                Annuler
              </button>
              <button
                className="validate-button"
                onClick={() => AddTrackToPlaylist()}
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

export default Modal;
