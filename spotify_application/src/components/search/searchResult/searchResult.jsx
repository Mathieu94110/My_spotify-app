import React from "react";
import "./searchResult.css";
import SearchResultItem from "../searchResultItem/searchResultItem";

const SearchResult = ({ searchResults, modalCallback }) => {
  return (
    <div className="search-result">
      {searchResults.map((track) => (
        <SearchResultItem
          track={track}
          key={track.uri}
          modalCallback={modalCallback}
        />
      ))}
    </div>
  );
};

export default SearchResult;
