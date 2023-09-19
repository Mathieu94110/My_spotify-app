import React from "react";
import "./PlaylistActionContainer.scss";

export default function PlaylistActionContainer({ title, children }) {
  return (
    <div className="playlist-action-container">
      <h2 className="playlist-action-container__header">{title}</h2>
      <div className="playlist-action-container__body">{children}</div>
    </div>
  );
}
