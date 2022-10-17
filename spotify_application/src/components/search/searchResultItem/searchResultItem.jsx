import React from "react";
import "./SearchResultItem.scss";

const SearchResultItem = ({ track, modalCallback }) => {
  const handleParentCallback = () => {
    modalCallback(track.uri);
  };

  return (
    <div className="search-result-item">
      <span className="search-result-item__image">
        <img src={track.albumUrl} />{" "}
      </span>
      <div>
        <div>
          {" "}
          <span className="search-result-item__text">{track.title}</span>
        </div>
        <div>
          {" "}
          <span className="search-result-item__artist">{track.artist}</span>
        </div>
        <button
          className="search-result-item__button"
          onClick={handleParentCallback}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SearchResultItem;
