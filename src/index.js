import React from "react";
import { render } from "react-dom";
import AppHeader from "./AppHeader";
import Main from "./Main";

render(
  <div>
    <AppHeader />
    <Main />
  </div>,
  document.getElementById("root")
);
