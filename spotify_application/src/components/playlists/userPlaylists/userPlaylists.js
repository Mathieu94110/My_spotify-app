import { useState, useEffect } from "react";
import { selectDisplayName } from "../../../store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import "./userPlaylists.css";
import Card from "../../../layout/card/card";
import {
  selectplaylistsItems,
  getUserPlaylists,
} from "../../../store/playlists/playlistsSlice";

const UserPlaylists = () => {
  const playlists = useSelector(selectplaylistsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, [playlists]);

  return (
    <div className="user-playlists-container">
      <div className="user-playlists-title">
        {" "}
        <h2>Vos playlists</h2>
      </div>
      <div className="user-playlists-content">
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
