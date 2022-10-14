import React from "react";
import "./card.scss";

const Card = (props) => {
  const { image, uri, name, description, details } = props;
  const style = {
    background: "url(" + image + ") center center no-repeat",
    maxWidth: "100%",
  };
  return (
    <div className="card">
      <header style={style} id={image} className="card-header"></header>
      <div className="card-body">
        <p className="date">
          Lien: <a href={uri}>{uri}</a>
        </p>

        <h2>{name}</h2>

        <p className="body-content">
          {description ? description : "Aucune description"}
        </p>
        {details && (
          <button className="button button-primary">
            <i className="fa fa-chevron-right"></i> Voir le détail
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
