import React, { Component } from "react";
import "./seats.css";
import ReactDOM from "react-dom";
import MovieDetails from "./MovieDetails";
import Seats from "./Seats";
import Main from "./Main";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <a className="logo" href="#" onClick={this.goToMain}>
            <i className="fa fa-film" /> Coderscamp Cinema
          </a>
        </nav>
      </header>
    );
  }

  goToMain() {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <div>
        <AppHeader />
        <Main />
      </div>,
      rootElement
    );
  }
}

export default AppHeader;
