import Card from "../../../card/Card";
import defaultCardImg from "../../../../assets/images/spotify-card-default-img.jpg";
import "./UserPlaylistsList.scss";
const UserPlaylistsList = ({ playlists }) => {
  return (
    <div className="user-playlist-list">
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
        <div className="user-playlist-list-empty">
          Vous n'avez pas crée de playlist
        </div>
      )}
    </div>
  );
};
export default UserPlaylistsList;
