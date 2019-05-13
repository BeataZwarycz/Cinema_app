import React from 'react';
import { render } from 'react-dom';
import Seats from './Seats';
import AppHeader from './AppHeader';
import MovieDetails from './MovieDetails';

render(
    <div>
        <AppHeader />
        <MovieDetails />
        <Seats />
    </div>, document.getElementById('root')
);

