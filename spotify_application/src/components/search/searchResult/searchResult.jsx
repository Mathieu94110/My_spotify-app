import React from "react";
import "./searchResult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";

const SearchResult = ({ searchResults }) => {
  return (
    <div className="search-result">
      {searchResults.map((track) => (
        <SearchResultItem track={track} key={track.uri} />
      ))}
    </div>
  );
};

export default SearchResult;
