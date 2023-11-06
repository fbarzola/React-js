/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import Header from './components/Header/header';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { private_createTypography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Producto from './Pages/Producto';
import Details from './Pages/Details';
import Shop from './Pages/Shop';
import Register from './Pages/Register';

const App = () => {
  const [cart, setCart, ] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/producto/:category" element={<Producto />} />
          <Route path="/details/:productId" element={<Details addToCart={addToCart}  />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop" element={<Shop cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

