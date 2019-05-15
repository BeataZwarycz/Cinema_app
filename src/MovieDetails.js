import React, { Component } from "react";
import "./seats.css";
import Popup from "reactjs-popup";
import Reservation from "./reservation";
import Tickets from "./ticket";
import Seats from "./Seats";
import { OrderGetRequest, OrderPostRequest } from "./OrderRequest";

class MovieDetails extends Component {
  state = {
    selectedTickets: [0, 0, 0, 0],
    numOfTickets: 0,
    selectedSeats: [],
    blockedSeats: []
  };

  handleTicketChange = (type, number) => {
    const tickets = this.state.selectedTickets;
    tickets[type] = number;
    const num = tickets.reduce((acc, x) => acc + x, 0);
    this.setState({
      selectedTickets: tickets,
      numOfTickets: num
    });
  };

  handleSeatClick = (isAdding, seatCode) => {
    let seats = this.state.selectedSeats;
    if (isAdding) {
      seats.push(seatCode);
      this.setState({
        selectedSeats: seats
      });
    } else {
      seats = seats.filter(seat => seat !== seatCode);
      this.setState({
        selectedSeats: seats
      });
    }
  };

  sendReservation = () => {
    const { movieId, date, time } = this.props.match.params;
    const { selectedSeats, selectedTickets } = this.state;
    const seats = selectedSeats;
    const ticketType = selectedTickets.map(
      (number, type) => `${type}-${number}`
    );

    const updateSeats = () => {
      this.getReservations();
    };

    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://cinema-coderscamp.herokuapp.com/api/orders",
      true
    );
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      // const data = JSON.parse(this.response);
      if (request.status === 200) {
        alert("Złożono rezerwację");
        updateSeats();
      } else {
        alert("Błąd! Nie udało się złożyć rezerwacji!");
      }
    };
    const orderRequest = new OrderPostRequest(
      movieId,
      date,
      time,
      seats,
      ticketType
    );
    request.send(JSON.stringify(orderRequest));
  };

  getReservations = () => {
    const { movieId, date, time } = this.props.match.params;
    const changeState = seats => {
      const newBlockedSeats = this.state.blockedSeats;
      seats.forEach(seat => newBlockedSeats.push(...seat));
      this.setState({ blockedSeats: newBlockedSeats });
    };
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://cinema-coderscamp.herokuapp.com/api/orders",
      true
    );
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      const data = JSON.parse(this.response);
      if (request.status === 200) {
        console.log(data);
        changeState(data.map(obj => obj.seats));
      } else {
        alert(data);
      }
    };
    const orderRequest = new OrderGetRequest(movieId, date, time);
    request.send(JSON.stringify(orderRequest));
  };

  componentDidMount() {
    this.getReservations();
  }

  render() {
    const { name, date, time } = this.props.match.params;
    return (
      <div>
        <div className="reservation-details">
          <h1 className="movie-name">{name}</h1>
          <h6 className="movie-time">
            {date} {time}
          </h6>
          <Popup
            trigger={
              <button className="buy-btn">Wybierz rodzaj biletów</button>
            }
            position="right center"
            modal
          >
            {close => (
              <Tickets
                handleTicketChange={this.handleTicketChange}
                selectedTickets={this.state.selectedTickets}
                close={close}
              />
            )}
          </Popup>
          <Popup
            trigger={
              <button
                className="reservation-btn"
                {...(this.state.numOfTickets ? {} : { disabled: true })}
              >
                Rezerwuj wybrane miejsca
              </button>
            }
            position="right center"
            modal
          >
            {close => (
              <Reservation
                isReservationCorrect={
                  this.state.numOfTickets === this.state.selectedSeats.length
                }
                sendReservation={this.sendReservation}
                close={close}
              />
            )}
          </Popup>
        </div>
        <Seats
          handleSeatClick={this.handleSeatClick}
          selectedSeats={this.state.selectedSeats}
          blockedSeats={this.state.blockedSeats}
          numOfTickets={this.state.numOfTickets}
        />
      </div>
    );
  }
}

export default MovieDetails;
