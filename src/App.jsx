/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header/header';
import NavBar from './NavBar/NavBar';
import Cardproduct from './components/CardPorduct/Cardproduct';
import { private_createTypography } from '@mui/material';
import "./App.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer/>
    <div className='UserSection'>
        <Cardproduct
        description= "Impresora 3D Endler Pro"
        price= "$300.000"
        discount= "$330.000 10% off"
        img= "./src/impresoras-3d.jpg"              
        />
        <Cardproduct
        description= "Impresora 3D Delta Mini"
        price= "$200.000"
        discount= "$220.000 10% off"
        img= "./src/delta.jpg"              
        />
        <Cardproduct
        description= "Impresora 3D Crealty Pro"
        price= "$500.000"
        discount= "$550.000 10% off"
        img= "./src/creatly2.jpg"              
        />
    </div>
    </div>
  );
}

export default App;

