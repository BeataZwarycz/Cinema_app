import React, { Component } from 'react';
import './seats.css';
import { Formik, Field } from "formik";
import Form from "./Form";

class MovieDetails extends Component {
    render() {
        const { movie = "Tytuł filmu", date = "Data i godzina seansu" } = this.props
        return (
            <div className="reservation-details">
                <p className="movie-name">{movie}</p>
                <p className="movie-time">{date}</p>
                <button onClick={Form.openForm} className="reservation-btn">Rezerwuj wybrane miejsca</button>
            </div>
        )
    }
};

export default MovieDetails;