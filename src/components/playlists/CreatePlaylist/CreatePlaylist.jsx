import { useState } from "react";
import "./CreatePlaylist.scss";

export default function createPlaylist({
  createPlayList,
  cancelPlaylistCreation,
  confirmPlaylistCreation,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPlaylistCreated, setIsPlaylistCreated] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const createdPlaylist = {
      name: name,
      description: description,
    };
    createPlayList(createdPlaylist);
    setIsPlaylistCreated(true);
  };

  const confirmCreation = () => {
    confirmPlaylistCreation();
    reset();
  };

  const reset = () => {
    setName("");
    setDescription("");
    cancelPlaylistCreation();
    setIsPlaylistCreated(false);
  };

  return (
    <div className="create-playlist">
      <div className="create-playlist__title">
        <h2>Créer une playlist</h2>
      </div>
      <div className="create-playlist__form-container">
        <form className="create-playlist__form" onSubmit={handleSubmit}>
          <label className="create-playlist__form-label">
            Nom:
            <input
              type="text"
              id="outlined-basic"
              className="create-playlist__form-inputs"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={isPlaylistCreated}
            />
          </label>
          <label className="create-playlist__form-label">
            Description:
            <textarea
              type="text"
              id="outlined-basic"
              className="create-playlist__form-inputs"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              disabled={isPlaylistCreated}
            />
          </label>
          {isPlaylistCreated ? (
            <>
              <input
                className="create-playlist__button create-playlist__button-validate"
                type="button"
                value="Valider la playlist"
                onClick={() => confirmCreation()}
              />
              <input
                className="create-playlist__button create-playlist__button-cancel"
                type="button"
                value="Annuler"
                onClick={() => reset()}
              />
            </>
          ) : (
            <input
              className="create-playlist__button create-playlist__button-create"
              type="submit"
              value="Créer la playlist"
              disabled={!name || !description}
            />
          )}
        </form>
      </div>
    </div>
  );
}
