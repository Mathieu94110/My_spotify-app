import { useState, useEffect, useRef } from "react";
import "./createPlaylist.scss";
export default function createPlaylist({
  createPlayList,
  playlistImage,
  cancelPlaylistCreation,
  confirmPlaylistCreation,
}) {
  const [albums, setAlbums] = useState([]);
  const [isPlaylistCreated, setIsPlaylistCreated] = useState(false);
  const [isImageValid, setIsImageValid] = useState(false);
  useState(false);
  const name = useRef(null);
  const description = useRef(null);

  useEffect(() => {
    playlistImage.picture !== undefined && playlistImage.uri !== undefined
      ? setIsImageValid(true)
      : setIsImageValid(false);
  }, [playlistImage]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name.current.value);
    const createdPlaylist = {
      name: name.current.value,
      description: description.current.value,
      image: playlistImage,
    };
    createPlayList(createdPlaylist);
    setIsPlaylistCreated(true);
  };

  const reset = () => {
    name.current.value = null;
    description.current.value = null;
    cancelPlaylistCreation();
    setIsPlaylistCreated(false);
    setIsImageValid(false);
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
              ref={name}
              disabled={isPlaylistCreated}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              id="outlined-basic"
              name="description"
              ref={description}
              disabled={isPlaylistCreated}
            />
          </label>
          {isImageValid && (
            <div>
              <label>Image</label>
              <input
                type="text"
                id="outlined-basic"
                name="picture"
                value={playlistImage.picture}
                disabled
              />
              <label>Lien de l'image</label>
              <input
                type="text"
                id="outlined-basic"
                name="uri"
                value={playlistImage.uri}
                disabled
              />
            </div>
          )}
          {isPlaylistCreated ? (
            <>
              <input
                className="validate-button"
                type="button"
                value="Valider la playlist"
                onClick={() => confirmPlaylistCreation()}
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
              disabled={!isImageValid}
            />
          )}
        </form>
      </div>
    </div>
  );
}
