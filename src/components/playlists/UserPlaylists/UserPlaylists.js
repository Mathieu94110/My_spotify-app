import PlaylistActionContainer from "../../../layout/PlaylistActionContainer/PlaylistActionContainer";
import UserPlaylistsList from "./Components/UserPlaylistsList";

export default function UserPlaylists({ playlists }) {
  return (
    <PlaylistActionContainer title="Vos playlists">
      <UserPlaylistsList playlists={playlists} />
    </PlaylistActionContainer>
  );
}
