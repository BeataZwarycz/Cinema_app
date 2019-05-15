import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactDOM from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Seats from "./Seats";
import AppHeader from "./AppHeader";
import MovieDetails from "./MovieDetails";
import Popup from "reactjs-popup";
import "./Main.css";

class Main extends Component {
  popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=825bda5f2062a7724c9be722b4e4de3d";
  imageUrl = "https://image.tmdb.org/t/p/w500";

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      startDate: "",
      startTime: "",
      selectedDate: new Date(),
      isDateSelected: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    this.setState({
      startDate: dd + "." + mm + "." + yyyy,
      startTime: date
        .toString()
        .split(" ")[4]
        .substring(0, 5),
      selectedDate: date,
      isDateSelected: true
    });
  }

  resetDateSelected = () => {
    this.setState({
      isDateSelected: false
    });
  };

  render() {
    var moviesHtml = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      const movie = this.state.movies[i];
      moviesHtml.push(
        <div key={i} className="movie-container">
          <button className="buy-ticket">
            <div className="poster">
              <img src={this.imageUrl + movie.poster_path} alt="" />
            </div>
            <p className="movie-name">{movie.original_title}</p>
          </button>
          <Popup
            trigger={<button className="reserve">Rezerwuj</button>}
            modal
            onClose={this.resetDateSelected}
          >
            {close => (
              <div>
                <div className="header">Wybierz datę seansu</div>
                <div className="content">
                  <DatePicker
                    className="data"
                    selected={this.state.selectedDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="dd.MM.yyyy HH:mm"
                    minDate={new Date()}
                    maxDate={moment()
                      .add(5, "days")
                      .toDate()}
                  />
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    close
                  </button>
                  <button
                    className="button"
                    {...(this.state.isDateSelected ? {} : { disabled: true })}
                  >
                    <Link
                      to={`/movie/${movie.id}/${movie.original_title}/${
                        this.state.startDate
                      }/${this.state.startTime}`}
                    >
                      Rezerwuj
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      );
    }
    return <div className="movies">{moviesHtml}</div>;
  }

  componentWillMount() {
    var promise = this.getPopularMovies();

    promise.then(
      result => {
        this.setState({ movies: result.results });
      },
      function(error) {
        console.log(error);
      }
    );
  }

  async getPopularMovies() {
    const response = await fetch(this.popularMoviesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
    return myJson;
  }

  goToSeats() {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <div>
        <AppHeader />
        <MovieDetails />
        <Seats />
      </div>,
      rootElement
    );
  }
}

export default Main;
