import React, { Component } from 'react';
import './seats.css';

class AppHeader extends Component {
    render() {
        return(
            <header>
                <nav className="navbar">
                    <a className="logo" href="#"><i className="fa fa-film"></i> Coderscamp Cinema</a>
                </nav>
            </header>
        )
    }
}

export default AppHeader