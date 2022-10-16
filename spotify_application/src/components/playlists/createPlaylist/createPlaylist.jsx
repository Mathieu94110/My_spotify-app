import { useState } from "react";
import "./createPlaylist.scss";
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
    <div className="create-playlists-container">
      <div className="create-playlist-title">
        <h2>Créer une playlist</h2>
      </div>
      <div className="create-playlist-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              id="outlined-basic"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={isPlaylistCreated}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              id="outlined-basic"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              disabled={isPlaylistCreated}
            />
          </label>
          {isPlaylistCreated ? (
            <>
              <input
                className="validate-button"
                type="button"
                value="Valider la playlist"
                onClick={() => confirmCreation()}
              />
              <input
                className="cancel-button"
                type="button"
                value="Annuler"
                onClick={() => reset()}
              />
            </>
          ) : (
            <input
              className="create-button"
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
