import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";
import AppHeader from "./AppHeader";
import Main from "./Main";
import MovieDetails from "./MovieDetails";

render(
  <div>
    <BrowserRouter>
      <div>
        <AppHeader />
        <Route path="/" exact component={Main} />
        <Route
          path="/movie/:movieId/:name/:date/:time"
          component={MovieDetails}
        />
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
