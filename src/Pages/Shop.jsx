/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PaperShop from '../components/Paper/PaperShop'; 
import { AuthProvider, useAuth } from '../components/Header/AuthContext';
import { CartProvider } from '../components/Paper/CartContext';
import { useCart } from '../components/Paper/CartContext';


const Shop = ({ cart, removeFromCart }) => {
    
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();
  const { dispatch } = useCart();

  const handleFinalizarCompra = () => {
    setTimeout(() => {
      if (isUserLoggedIn) {
        alert('Compra Exitosa!! Verifique su e-mail, Su numero de order es: 7328490');
        dispatch({ type: 'UPDATE_CART', payload: [] }); 
        navigate("/");
      } else {
        alert('Primero debes registrarte');
        navigate('/register');
      }
    }, 2000);
  };

  
  
  return (
    <div style={{ marginTop: 50, marginLeft: 100 }}>
      <h1>Carrito de Compras</h1>
      <h1></h1>
      <h1></h1>
      <Button 
      style={{
        display: 'block',
        fontSize:'large',
        marginTop: '40px',
        textAlign: 'center',
        color:'lightcoral',
        borderColor:'lightcoral' 
      }}
      variant='outlined' onClick={() => navigate("/")}>
        Seguir Comprando
      </Button>
      <h1></h1>
      <Button 
      style={{
        display: 'block',
        fontSize:'large',
        marginLeft: '2px',
        marginTop: '10px',
        textAlign: 'center',
        backgroundColor: 'lightcoral' 
      }}
      variant='contained' onClick={(handleFinalizarCompra) }>
        Finalizar Compra!
      </Button>
    
      <h1></h1>
      <PaperShop cart={cart} removeFromCart={removeFromCart} /> 
    </div>
  );
};

export default Shop;
