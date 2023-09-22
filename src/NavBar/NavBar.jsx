/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="logo_3D.png" width="3" height="3" className="mr-2" /> 3D-Store
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/categoria1">
                    Categoría 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/categoria2">
                    Categoría 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/categoria3">
                    Categoría 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/categoria4">
                    Categoría 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
