import { React } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import { Home } from "./home";
import { CharacterSelect } from "./characterAssign/characterSelect";

render(
  <Router>
    <Home path="/" />
    <CharacterSelect path="characterAssign" />
  </Router>
);
