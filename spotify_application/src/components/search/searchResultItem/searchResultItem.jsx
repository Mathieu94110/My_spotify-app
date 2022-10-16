import React from "react";
import "./searchResultItem.css";

const SearchResultItem = ({ track, modalCallback }) => {
  function handleParentCallback(e) {
    modalCallback(e);
  }

  return (
    <div className="search-container">
      <span className="image">
        <img src={track.albumUrl} />{" "}
      </span>
      <div className="song">
        <span className="text">{track.title}</span>
        <span className="artist">{track.artist}</span>
        <button onClick={handleParentCallback}>+</button>
      </div>
    </div>
  );
};

export default SearchResultItem;
