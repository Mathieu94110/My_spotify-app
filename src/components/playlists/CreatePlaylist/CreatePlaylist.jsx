import "./CreatePlaylist.scss";
import PlaylistActionContainer from "../../../layout/PlaylistActionContainer/PlaylistActionContainer";
import CreatePlayListForm from "./Components/CreatePlaylistForm";

export default function createPlaylist({ createPlayList }) {
  return (
    <PlaylistActionContainer title="Créer une playlist">
      <CreatePlayListForm createPlayList={createPlayList} />
    </PlaylistActionContainer>
  );
}
