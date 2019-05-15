import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./seats.css";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/" className="logo">
            <i className="fa fa-film" /> Coderscamp Cinema
          </Link>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
