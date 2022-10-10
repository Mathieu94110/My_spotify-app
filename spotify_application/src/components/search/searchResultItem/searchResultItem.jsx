import React from 'react';
import "./searchResultItem.css";
const SearchResultItem = ({ track }) => {

  return (
    <div className="search-container">
      <span className="image"><img src={track.albumUrl}/> </span>
      <div  className="song">
        <span className="text">{track.title}</span>
        <span className="artist">{track.artist}</span>
      </div>
    </div>
  );
};

export default SearchResultItem;