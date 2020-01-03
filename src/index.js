import React from "react";
import ReactDOM from "react-dom";
import { CharacterSelect } from "./characterAssign/characterSelect";
import { Home } from "./home/index";
import "./styles.css";
import { Router } from "@reach/router";
import { Music } from "./home/music";

function App() {
  return (
    <div className="App">
      <Music />
      <Router>
        <Home path="/" />
        <CharacterSelect path="characterAssign" />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
