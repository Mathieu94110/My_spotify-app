import React, { useState, useEffect } from "react";
import axios from "axios";
import { selectDisplayName } from "../../store/user/userSlice";
import { useSelector } from "react-redux";
import "./home.css";

const Home = () => {
  const userName = useSelector(selectDisplayName);
  return (
    <div className="home-container">
      <h1 className="home-title">
        Bienvenue {userName.charAt(0).toUpperCase() + userName.slice(1)}, vous
        êtes bien connecté sur votre plateforme Spotify
      </h1>
      <div className="in-stagging-container">
        <p>
          Page Home actuellement en rénovation, ajout des tendances globales et
          par catégories de genre, bientôt disponible
        </p>
      </div>
    </div>
  );
};

export default Home;
