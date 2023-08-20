import React from "react";
import "./SearchResultItem.scss";

const SearchResultItem = ({ track, modalCallback }) => {
  const handleParentCallback = () => {
    modalCallback(track);
  };

  return (
    <div className="search-result-item" onClick={handleParentCallback}>
      <div>
        <img src={track.albumUrl} className="search-result-item__img" />
      </div>
      <div>
        <span className="search-result-item__text">
          {track.title.length > 40
            ? track.title.substring(0, 40) + "..."
            : track.title}
        </span>
        <br />
        <span className="search-result-item__artist">{track.artist}</span>
      </div>
      <button
        className="search-result-item__button"
        onClick={handleParentCallback}
      >
        +
      </button>
    </div>
  );
};

export default SearchResultItem;
