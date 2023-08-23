import Card from "../../../card/Card";
import defaultCardImg from "../../../../assets/images/spotify-card-default-img.jpg";

const UserPlaylistsList = ({ playlists }) => {
  return (
    <>
      {playlists && playlists.length > 0 ? (
        playlists.map((item, index) => (
          <div key={index}>
            <Card
              image={item.images[0] ? item.images[0].url : defaultCardImg}
              id={item.id}
              name={item.name}
            />
          </div>
        ))
      ) : (
        <div style={{ color: "#fff", fontWeight: "600" }}>
          Vous n'avez pas crée de playlist
        </div>
      )}
    </>
  );
};
export default UserPlaylistsList;
