import React from "react";
import "./App.css";
import Authentication from "./components/authentication";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Playlists from "./components/playlists";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{ margin: "0" }}>
            <li style={{ listStyleType: "none" }}>
              <Link to="/auth">Authentification</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/auth" component={Authentication} />
          <Route path="/playlists" component={Playlists} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
