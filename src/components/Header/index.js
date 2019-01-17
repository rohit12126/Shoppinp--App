import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = props => (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink to="/"  className="nav-link" exact >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about"  className="nav-link" exact >About</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  );
export default Header;