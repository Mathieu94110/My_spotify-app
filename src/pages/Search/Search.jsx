import { useState, useEffect } from "react";
import SearchResult from "../../components/search/SearchResult/SearchResult";
import AddTrackModal from "../../components/modal/AddTrackModal";
import {
  getPlaylists,
  addTrackToPlaylist,
  getPlaylistItems,
} from "../../store/actions";
import {
  selectAccessToken,
  getPlaylistsSelector,
  getPlaylistItemsSelector,
} from "../../store/selectors";
import { connect, useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import apiUserSearchRequest from "../../api/api.search";
import "./Search.scss";
import "react-toastify/dist/ReactToastify.css";

const Search = (props) => {
  const accessToken = useSelector(selectAccessToken);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [track, setTrack] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    props.getPlaylists();
  }, []);

  useEffect(() => {
    if (!search) return setSearchResults([]);

    let config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: search,
        type: "track",
      },
    };
    apiUserSearchRequest.searchTracks(config).then((res) => {
      setSearchResults(
        res.data.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
  }, [search]);

  const isModalOpen = (value) => {
    setTrack(value);
    return setIsOpen(!isOpen);
  };

  const isTrackExistOnPlaylist = (element) => element.track.uri === track.uri;

  const addTrack = async (track, checkedPlaylist) => {
    const { title, uri } = track;
    const { id, name } = checkedPlaylist;
    const currentPlaylistTracks = await props.getPlaylistItems(id);
    if (currentPlaylistTracks.items.some(isTrackExistOnPlaylist)) {
      toast.error(`Ce titre existe déjà dans la playlist ${name} !`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    dispatch(addTrackToPlaylist({ uri, id }))
      .then(() => {
        toast.success(`${title} a bien été ajouté à ${name} !`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(`${error.message} !`, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .finally(() => {
        isModalOpen();
      });
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        placeholder="Rechercher un titre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchResult searchResults={searchResults} modalCallback={isModalOpen} />

      {isOpen && (
        <AddTrackModal
          setIsOpen={isModalOpen}
          playlists={props.userPlaylists}
          // trackUri={trackUri}
          track={track}
          addTrackToPlaylist={addTrack}
        />
      )}
      {/* Tag below is necessary to display toast message*/}
      <ToastContainer />
    </div>
  );
};

export default connect(
  (state) => ({
    userPlaylists: getPlaylistsSelector(state),
    userPlaylistTracks: getPlaylistItemsSelector(state),
  }),
  {
    getPlaylists,
    getPlaylistItems,
  }
)(Search);
