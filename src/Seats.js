import React, { Component } from "react";
import { Amount } from "./ticket.js"
import "./seats.css";

class Seats extends Component {
  constructor(props) {
    super(props);
    this.state = { numOfTicket: 0 };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    const seat = e.target;

    if (seat.className === "seat") {
      seat.style.color = "#ffffff";
      seat.style.background = "rgb(139, 0, 0)";
      seat.className = "seat clicked";

      this.setState(state => ({
        numOfTickets: state.numOfTickets + 1
      }));
      console.log(this.state.numOfTickets)

      return this.state.numOfTickets;
    } if (seat.className === "seat clicked") {
      seat.style.background = "#5F9EA0";
      seat.style.color = "#000000"
      seat.className = "seat"

      this.setState(state => ({
        numOfTickets: state.numOfTickets - 1
      }));

      return this.state.numOfTickets;
    }
  }

  render() {
    return (
      <div className="hall">
        <div className="seats">
          <div className="screen">Ekran</div>
          <div className="row">
            <div className="row-name">A</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">B</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">C</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">D</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
          </div>
          <div className="row">
            <div className="row-name">E</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
          </div>
          <div className="row">
            <div className="row-name">F</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
          </div>
          <div className="row">
            <div className="row-name">G</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">H</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">I</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">J</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">K</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">L</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">M</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">N</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
          <div className="row">
            <div className="row-name">O</div>
            <div className="seat" onClick={this.onClickHandler}>
              1
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              2
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              3
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              4
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              5
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              6
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              7
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              8
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              9
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              10
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              11
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              12
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              13
            </div>
            <div className="seat" onClick={this.onClickHandler}>
              14
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
