const CreatePlayListForm = ({ createPlayList }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    createPlayList(formJson);
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label className="create-playlist__form-label">
          Nom
          <input
            type="text"
            id="outlined-basic"
            className="create-playlist__form-inputs"
            name="name"
          />
        </label>
        <label className="create-playlist__form-label">
          Description
          <textarea
            type="text"
            id="outlined-basic"
            className="create-playlist__form-inputs"
            name="description"
          />
        </label>
        <button
          type="reset"
          className="create-playlist__button create-playlist__cancel"
        >
          Annuler
        </button>
        <button
          className="create-playlist__button create-playlist__create"
          type="submit"
          value="Créer la playlist"
        >
          Créer la playlist
        </button>
      </form>
    </>
  );
};
export default CreatePlayListForm;
