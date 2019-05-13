import React, { Component } from 'react';
import './seats.css';

class MovieDetails extends Component {
    render() {
        const { movie = "Tytuł filmu", date="Data i godzina seansu" } = this.props
        return(
            <div className="reservation-details">
                <p className="movie-name">{movie}</p>
                <p className="movie-time">{date}</p>
                <button className="reservation-btn">Rezerwuj wybrane miejsca</button>
            </div>
        )
    }
};

export default MovieDetails;