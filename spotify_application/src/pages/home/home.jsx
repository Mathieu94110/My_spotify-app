import React from "react";
import { selectDisplayName } from "../../store/user/userSlice";
import { useSelector } from "react-redux";
import "./Home.scss";

const Home = () => {
  const userName = useSelector(selectDisplayName);
  return (
    <div className="home">
      <h1 className="home__title">
        Bienvenue {userName.charAt(0).toUpperCase() + userName.slice(1)}, vous
        êtes bien connecté sur votre plateforme Spotify
      </h1>
      <div className="home__in-stagging">
        <p>
          Page Home actuellement en rénovation, ajout des tendances globales et
          par catégories de genre, bientôt disponible
        </p>
      </div>
    </div>
  );
};

export default Home;
