/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './NavBar.css';
import CardWidget from '../components/CartWidget/CardWidget';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavBar = ({ cartCount, updateCartCount }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const categories = ["Impresoras_3D", "Impresiones_3D", "Repuestos_e_Insumos"];
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = () => {
    
    setDropdownOpen(false);
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
                Inicio
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
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} >
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/producto/${category}`}
                    onClick={handleCategoryClick} 
                    className={`dropdown-item ${location.pathname === `/producto/${category}` ? 'active' : ''}`}
                                        
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                <CardWidget cartCount={cartCount} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

