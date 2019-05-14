import React from "react";
import { render } from "react-dom";
import Seats from "./Seats";
import AppHeader from "./AppHeader";
import MovieDetails from "./MovieDetails";
import Main from "./Main";

render(
  <div>
    <AppHeader />
    <Main />
  </div>,
  document.getElementById("root")
);
