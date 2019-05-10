// Package Imports
import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Radio } from "semantic-ui-react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Topics from "./pages/Topics";

// Assets
import logo from "./subhub-logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <NavLink to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/topics">Topics</NavLink>
            </header>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </BrowserRouter>
        <Radio toggle />
      </div>
    );
  }
}

export default App;
