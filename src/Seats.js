import React, { Component } from "react";
import "./seats.css";

class Seats extends Component {
  handleSeatClick = e => {
    const seat = e.target;
    if (seat.className === "seat blocked") return;
    if (seat.className === "seat") {
      if (this.props.selectedSeats.length >= this.props.numOfTickets) return;
      seat.style.color = "#ffffff";
      seat.style.background = "rgb(139, 0, 0)";
      seat.className = "seat clicked";
      this.props.handleSeatClick(true, e.target.id);
    } else if (seat.className === "seat clicked") {
      seat.style.background = "#5F9EA0";
      seat.style.color = "#000000";
      seat.className = "seat";
      this.props.handleSeatClick(false, e.target.id);
    }
  };

  renderRow = (name, seats) => {
    const divs = [];
    divs.push(
      <div key={name} className="row-name">
        {name}
      </div>
    );
    for (let i = 1; i <= seats; i++) {
      divs.push(
        <div
          id={`${name}-${i}`}
          ref={`${name}-${i}`}
          key={`${name}-${i}`}
          className={
            this.props.blockedSeats &&
            this.props.blockedSeats.includes(`${name}-${i}`)
              ? "seat blocked"
              : "seat"
          }
          {...(this.props.blockedSeats &&
          this.props.blockedSeats.includes(`${name}-${i}`)
            ? {}
            : { disabled: true })}
          onClick={this.handleSeatClick}
        >
          {i}
        </div>
      );
    }
    return divs;
  };

  render() {
    return (
      <div className="hall">
        <div className="seats">
          <div className="screen">Ekran</div>
          <div className="row">{this.renderRow("A", 14)}</div>
          <div className="row">{this.renderRow("B", 14)}</div>
          <div className="row">{this.renderRow("C", 14)}</div>
          <div className="row">{this.renderRow("D", 10)}</div>
          <div className="row">{this.renderRow("E", 10)}</div>
          <div className="row">{this.renderRow("F", 10)}</div>
          <div className="row">{this.renderRow("G", 14)}</div>
          <div className="row">{this.renderRow("H", 14)}</div>
          <div className="row">{this.renderRow("I", 14)}</div>
          <div className="row">{this.renderRow("J", 14)}</div>
          <div className="row">{this.renderRow("K", 14)}</div>
          <div className="row">{this.renderRow("L", 14)}</div>
          <div className="row">{this.renderRow("M", 14)}</div>
          <div className="row">{this.renderRow("N", 14)}</div>
          <div className="row">{this.renderRow("O", 14)}</div>
        </div>
      </div>
    );
  }
}

export default Seats;
