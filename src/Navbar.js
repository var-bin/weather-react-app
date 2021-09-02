import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow-lg">
            <div className="container">
                <ul className="nav navbar-nav">
                    <li className="nav-item fs-4 fw-bold">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item fs-4 fw-bold">
                        <NavLink exact  to="/favorites" className="nav-link" activeClassName="active">Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;