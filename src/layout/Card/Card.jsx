import React from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Card.scss";

const Card = ({ image, id, name }) => {
  const navigate = useNavigate();

  const style = {
    background: "url(" + image + ") center center no-repeat",
    maxWidth: "100%",
  };

  return (
    <div className="card">
      <img style={style} src={image} className="card__img" />

      <h3>{name}</h3>
      <VisibilityIcon
        className="card__link"
        onClick={() => navigate(`/playlistDetails/${name}/${id}`)}
      />
    </div>
  );
};
export default Card;
