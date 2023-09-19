import PlaylistActionContainer from "../../../layout/PlaylistActionContainer/PlaylistActionContainer";
import CreatePlayListForm from "./Components/CreatePlaylistForm";
import "./CreatePlaylist.scss";

export default function CreatePlaylist({ createPlayList }) {
  return (
    <PlaylistActionContainer title="Créer une playlist">
      <CreatePlayListForm createPlayList={createPlayList} />
    </PlaylistActionContainer>
  );
}
