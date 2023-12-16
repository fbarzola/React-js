/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardWidget from '../components/CartWidget/CardWidget';
import '../Css/NavBar.css';

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

  const handleClick = () => {
    
    navigate('/');
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="container" style={{marginTop:'-12px'}}>
      
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" className="nav-link">
          Inicio
        </Typography>
        <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
          <Typography
            variant="h6"
            component="button"
            onClick={toggleDropdown}
            className="nav-link"
          >
            Productos
          </Typography>
          <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
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
        </div>
        <Typography variant="h6" component={Link} to="/about" className="nav-link">
          Nosotros
        </Typography>
        <Typography variant="h6" component={Link} to="/contact" className="nav-link">
          Contacto
        </Typography>
        <div className="nav-item">
          <CardWidget cartCount={cartCount} />
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
