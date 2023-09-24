
// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from "./3D_Store.png";
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={img} alt="logo-3D-Store" className="logo" />
      </div>
      <div className="text-container">
        <h1>Bienvenido a 3D-Store</h1>
        <p>Explore Nuestros productos 3D</p>
      </div>
    </header>
  );
};

export default Header;
