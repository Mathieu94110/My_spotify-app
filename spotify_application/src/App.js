import React from "react";
import "./App.css";
import Authentication from "./components/authentication";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tracks from "./components/tracks";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/auth">Authentification</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/auth" component={Authentication} />
          <Route path="/tracks" component={Tracks} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
