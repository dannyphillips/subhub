// Package Imports
import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

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
              <div>
                <NavLink to="/">
                  <img src={logo} className="App-logo" alt="logo" />
                </NavLink>
              </div>
              <div>
                <NavLink to="/about">About</NavLink>
              </div>
              <div>
                <NavLink to="/topics">Topics</NavLink>
              </div>
            </header>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
