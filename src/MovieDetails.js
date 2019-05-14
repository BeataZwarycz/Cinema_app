import React, { Component } from "react";
import "./seats.css";
import Popup from "reactjs-popup";
import Reservation from "./reservation";
import Tickets from "./ticket";

class MovieDetails extends Component {
  render() {
    const {
      movie = "Tytuł filmu",
      date = "Data i godzina seansu"
    } = this.props;
    return (
      <div className="reservation-details">
        <p className="movie-name">{movie}</p>
        <p className="movie-time">{date}</p>
        <Popup
          trigger={
            <button className="reservation-btn">
              Rezerwuj wybrane miejsca
            </button>
          }
          position="right center"
          modal
        >
          <Reservation />
        </Popup>
        <Popup
          trigger={<button className="buy-btn">Kup wybrane miejsca</button>}
          position="right center"
          modal
        >
          <Tickets />
        </Popup>
      </div>
    );
  }
}

export default MovieDetails;
