
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavBar.css';
import CardWidget from '../components/CartWidget/CardWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
              <CardWidget/>
              </a>
            </li><a>1</a>
           </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
