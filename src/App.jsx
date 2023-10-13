/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React from 'react';
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

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

