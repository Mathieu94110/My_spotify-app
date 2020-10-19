import React, { Component } from "react";
import axios from "axios";

export default class Authentication extends Component {
 
  componentDidMount() {

    // on récupère la châine de caractère dans l'URL qui correspond au hash (#)
    let hash = this.props.location.hash; // fonction native en react
    // on veut accéder à access_token, on doit récupérer sa valeur entre 2 chaines: #access_token= et &
    let access_token = hash.split("#access_token=").pop().split("&")[0];
    console.log("access token here", access_token);
    if (access_token.length > 0) {
      // si notre code a détecté la présence d'aun access_token dans l'url, alors on le stocke dans le localstorage pour l'utilsier partour durant nos reqûetes futures
      localStorage.access_token = access_token;
      const config = {
        headers: { Authorization: `Bearer ${access_token}` },
      };

      axios.get("https://api.spotify.com/v1/me", config).then((res) => {
        let identifiant = res.data.id;
        localStorage.id = identifiant;
        console.log(identifiant);
      });

      // une fois qu'on a stocké l'access_token dans le localstorage, on va rediriger l'utilisateur vers la page d'accueil
      setTimeout(() => this.props.history.push("/home"), 1000); //cacher pour voir le # dans l'url  ;
    } else {
    }
  }
  render() {
    return (
      <div>
        <h1>Authentifiez-vous</h1>
        <a href="https://accounts.spotify.com/authorize?client_id=de2017d063ae4b7d87f7d52b9d8c7d31&response_type=token&scope=playlist-modify-public playlist-modify-private&redirect_uri=http://localhost:3000/auth">
          Me connecter
        </a>
      </div>
    );
  }
}
