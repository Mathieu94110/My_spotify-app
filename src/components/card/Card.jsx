import React from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Card.scss";

const Card = ({ image, id, name }) => {
  const style = {
    background: "url(" + image + ") center center no-repeat",
    maxWidth: "100%",
  };
  return (
    <div className="card">
      <img style={style} src={image} className="card__img" />

      <h3>{name}</h3>
      <Link to={`/playlistDetails/${name}/${id}`}>
        <VisibilityIcon className="card__link" />
      </Link>
    </div>
  );
};
export default Card;
