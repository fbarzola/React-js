/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import './NavBar.css';
import CardWidget from '../components/CartWidget/CardWidget';
import { Link } from 'react-router-dom'; 

const NavBar = ({ onCategoryChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Agrega el estado isDropdownOpen
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ["Impresoras 3D", "Impresiones 3D", "Repuestos e Insumos"];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                id="navbarDropdown"
                role="button"
              >
                Productos
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </li>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                <CardWidget />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
