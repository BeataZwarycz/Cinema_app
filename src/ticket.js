import React, { Component } from "react";
import Select from "react-select";
import "./ticket.css";

const options1 = [
  { value: 0, label: "0" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" }
];

const options2 = [
  { value: "Normalny: 24 zł", label: "Normalny: 24 zł" },
  { value: "Ulgowy: 20 zł", label: "Ulgowy: 20 zł" },
  { value: "Studencki: 18 zł", label: "Studencki: 18 zł" },
  { value: "Dla seniora: 16 zł", label: "Dla seniora: 16 zł" }
];

class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numOfTickets: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = selectedOption => {
    this.setState(state => ({
      numOfTickets: state.numOfTickets + selectedOption.value
    }));
    // this.setState(
    //   state => ({
    //     numOfTickets: state.numOfTickets + selectedOption.value
    //   }),
    //   () => {
    //     console.log(this.state);
    //   }
    // );
    this.props.handleTicketChange(this.props.type, selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        defaultValue={options1[this.props.value]}
        onChange={this.handleChange}
        options={options1}
        placeholder="Liczba"
      />
    );
  }
}

class Type extends React.Component {
  // state = {
  //   selectedOption: null
  // };
  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // };
  render() {
    // const { selectedOption } = this.state;

    return (
      // <Select
      //   value={selectedOption}
      //   onChange={this.handleChange}
      //   options={options2}
      //   placeholder="Rodzaj"
      // />
      <div>{options2[this.props.type].label}</div>
    );
  }
}

class Tickets extends Component {
  render() {
    return (
      <div className="container">
        <div className="ticket-main-header">
          <p className="main-header">Wybierz bilety</p>
        </div>
        <div className="tickets">
          <div className="ticket">
            <div className="ticket-type">
              <Type type={0} />
            </div>
            <div className="amount">
              <Amount
                type={0}
                value={this.props.selectedTickets[0]}
                handleTicketChange={this.props.handleTicketChange}
              />
            </div>
            <div className="ticket-type">
              <Type type={1} />
            </div>
            <div className="amount">
              <Amount
                type={1}
                value={this.props.selectedTickets[1]}
                handleTicketChange={this.props.handleTicketChange}
              />
            </div>
            <div className="ticket-type">
              <Type type={2} />
            </div>
            <div className="amount">
              <Amount
                type={2}
                value={this.props.selectedTickets[2]}
                handleTicketChange={this.props.handleTicketChange}
              />
            </div>
            <div className="ticket-type">
              <Type type={3} />
            </div>
            <div className="amount">
              <Amount
                type={3}
                value={this.props.selectedTickets[3]}
                handleTicketChange={this.props.handleTicketChange}
              />
            </div>
          </div>
          <button type="submit" onClick={this.props.close}>
            Wybierz miejsca
          </button>
        </div>
      </div>
    );
  }
}

export default Tickets;
export { Amount };
export { Type };
