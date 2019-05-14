import React, { Component } from "react";
import "./seats.css";
import ReactDOM from "react-dom";
import Main from "./Main";

class Seats extends Component {

  constructor(props) {
    super(props);
    this.state = { numOfTickets : 0 };

    this.onClickHeandler = this.onClickHeandler.bind(this);
  }

  onClickHeandler(e) {
    const seat = e.target

    if (seat.style.background = "#5F9EA0") {
      seat.style.color = "#ffffff"
      seat.style.background = "#8b0000"

      console.log(seat.style.background)

      this.setState(state => ({
        numOfTickets : state.numOfTickets + 1

      }))

      return this.state.numOfTickets
    } else {
      seat.style.background = "#5F9EA0"

      this.setState(state => ({
        numOfTickets : state.numOfTickets - 1

      }))

      return this.state.numOfTickets
    }
  }

  render() {
    return (
      <div className="hall">
        <div className="seats">
          <div className="screen">Ekran</div>
          <div className="row">
            <div className="row-name">A</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">B</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">C</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">D</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
          </div>
          <div className="row">
            <div className="row-name">E</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
          </div>
          <div className="row">
            <div className="row-name">F</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
          </div>
          <div className="row">
            <div className="row-name">G</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">H</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">I</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">J</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">K</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">L</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">M</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">N</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
          <div className="row">
            <div className="row-name">O</div>
            <div className="seat" onClick={this.onClickHeandler}>1</div>
            <div className="seat" onClick={this.onClickHeandler}>2</div>
            <div className="seat" onClick={this.onClickHeandler}>3</div>
            <div className="seat" onClick={this.onClickHeandler}>4</div>
            <div className="seat" onClick={this.onClickHeandler}>5</div>
            <div className="seat" onClick={this.onClickHeandler}>6</div>
            <div className="seat" onClick={this.onClickHeandler}>7</div>
            <div className="seat" onClick={this.onClickHeandler}>8</div>
            <div className="seat" onClick={this.onClickHeandler}>9</div>
            <div className="seat" onClick={this.onClickHeandler}>10</div>
            <div className="seat" onClick={this.onClickHeandler}>11</div>
            <div className="seat" onClick={this.onClickHeandler}>12</div>
            <div className="seat" onClick={this.onClickHeandler}>13</div>
            <div className="seat" onClick={this.onClickHeandler}>14</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
