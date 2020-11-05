import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Routes } from "./Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="browser">
          <Header />
          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
