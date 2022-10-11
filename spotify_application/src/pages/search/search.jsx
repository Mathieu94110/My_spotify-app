import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "../../components/search/searchResult/searchResult";
import "./search.css";

const Search = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    <div style={{ width: "100%", height: "100%" }}>
      <input
        className="search-input"
        type="search"
        placeholder="Rechercher un titre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      ;
      <SearchResult searchResults={searchResults} />
    </div>
  );
};

export default Search;
