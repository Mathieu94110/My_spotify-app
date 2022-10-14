import "./createPlaylistModel.css";
import Card from "../../../layout/card/card";

const CreatePlaylistModel = (props) => {
  const { name, description, image, uri, details } = props;
  return (
    <div className="create-playlist-model">
      <div className="create-playlist-title">
        {" "}
        <h2>Récapitulatif</h2>
      </div>
      <div className="create-playlist-content">
        <Card
          image={image}
          uri={uri}
          name={name}
          description={description}
          details={details}
        />
      </div>
    </div>
  );
};

export default CreatePlaylistModel;
