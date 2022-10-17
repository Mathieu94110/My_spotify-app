import React from "react";
import "./SearchResult.scss";
import SearchResultItem from "../searchResultItem/SearchResultItem";

const SearchResult = ({ searchResults, modalCallback }) => {
  return (
    <div className="search-result">
      {searchResults.map((track, index) => (
        <SearchResultItem
          track={track}
          key={index}
          modalCallback={modalCallback}
        />
      ))}
    </div>
  );
};

export default SearchResult;
