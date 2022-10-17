import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserPlaylists.scss";
import Card from "../../../layout/card/Card";
import {
  selectplaylistsItems,
  getUserPlaylists,
} from "../../../store/playlists/playlistsSlice";

const UserPlaylists = () => {
  const playlists = useSelector(selectplaylistsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);

  return (
    <div className="user-playlists">
      <div className="user-playlists__title">
        {" "}
        <h2>Vos playlists</h2>
      </div>
      <div className="user-playlists__content">
        {playlists &&
          playlists.map((item, index) => (
            <div key={index}>
              <Card
                image={item.images[0] && item.images[0].url}
                uri={item.uri}
                name={item.name}
                description={item.description}
                details="true"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPlaylists;
