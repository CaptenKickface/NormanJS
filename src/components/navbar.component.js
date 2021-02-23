import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Main</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Intro</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/test" className="nav-link">Test</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/data" className="nav-link">Data List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}