import React, { Component } from "react";
import "./seats.css";
import DatePicker from "react-datepicker";
import ReactDOM from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Seats from "./Seats";
import AppHeader from "./AppHeader";
import MovieDetails from "./MovieDetails";

class Main extends Component {
  popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=825bda5f2062a7724c9be722b4e4de3d";
  imageUrl = "https://image.tmdb.org/t/p/w500";

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    var moviesHtml = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      moviesHtml.push(
        <div key={i} className="movie-container">
          <p className="movie-name">{this.state.movies[i].original_title}</p>
          <button className="buy-ticket">
            <img
              className="poster"
              src={this.imageUrl + this.state.movies[i].poster_path}
              alt=""
            />
          </button>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            maxDate={moment()
              .add(5, "days")
              .toDate()}
          />
          <button onClick={this.goToSeats}>Rezerwuj</button>
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
