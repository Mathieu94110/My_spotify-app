import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "../../components/search/searchResult/searchResult";
import Modal from "../../components/modal/modal";
import "./search.css";
import {
  selectplaylistsItems,
  getUserPlaylists,
} from "../../store/playlists/playlistsSlice";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const playlists = useSelector(selectplaylistsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPlaylists());
  }, []);

  const isModalOpen = () => {
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

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="search"
        placeholder="Rechercher un titre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchResult searchResults={searchResults} modalCallback={isModalOpen} />

      {isOpen && <Modal setIsOpen={isModalOpen} playlists={playlists}/>}
    </div>
  );
};

export default Search;
