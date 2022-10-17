import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "../../components/search/searchResult/SearchResult";
import AddTrackModal from "../../components/modal/AddTrackModal";
import "./Search.scss";
import {
  selectplaylistsItems,
  getUserPlaylists,
  addTrackToPlaylist,
} from "../../store/playlists/playlistsSlice";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [trackUri, setTrackUri] = useState("");
  const playlists = useSelector(selectplaylistsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);

  const isModalOpen = (value) => {
    setTrackUri(value);
    return isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  useEffect(() => {
    if (!search) return setSearchResults([]);

    let config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: search,
        type: "track",
      },
    };
    axios.get("https://api.spotify.com/v1/search", config).then((res) => {
      console.log("Ici =", res);
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

  const addTrack = (trackUri, checkedPlaylist) => {
    dispatch(addTrackToPlaylist({ trackUri, checkedPlaylist })).then((res) => {
      console.log(res);
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
          playlists={playlists}
          trackUri={trackUri}
          addTrackToPlaylist={addTrack}
        />
      )}
    </div>
  );
};

export default Search;
