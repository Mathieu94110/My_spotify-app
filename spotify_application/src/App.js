import React from 'react';
import './App.css';
import Authentication from './components/authentication';
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        
        <nav>
          <ul>
            <li>
              <Link to="/authentication">Authentification</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/authentication" component={Authentication} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
