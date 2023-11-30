/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, navigate } from 'react';
import Alert from '@mui/material/Alert';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Papers = ({ product }) => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const { cart, dispatch } = useCart();

  const incrementCount = () => {
    if (count < product.Stock) {
      setCount(count + 1);
    } else {
      setShowAlert(true);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleBuy = () => {
    if (count > 0) {
      const existingItemIndex = cart.findIndex((item) => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += count;
        dispatch({ type: 'UPDATE_CART', payload: updatedCart });
      } else {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            product: product,
            quantity: count,
          },
        });
      }
      
      dispatch({ type: 'UPDATE_CART_COUNT' });
    }
  };

  return (
    <div className='pap'>
      <h2>{product.Title}</h2>
      <h4>Precio: ${product.price}</h4>
      <p>Opciones de Pago</p>
      <a>3 Cuotas sin interés de $6.600</a>
      <h1></h1>
      <a><CreditCardOutlinedIcon /></a>
      <a> + </a>
      <a><LocalShippingOutlinedIcon /></a>
      <h1></h1>
      <h1></h1>
      <Button ><a onClick={incrementCount}>+</a></Button>
      <span className="counter">{count}</span>
      <Button><a onClick={decrementCount}>-</a></Button>
      {showAlert && (
        <Alert severity="info" onClose={closeAlert}>
          No hay stock.
        </Alert>
      )}
      <Link to='/'>
            <Button 
      variant="outlined"
      size="large"
      style={{
        display:'flex',
        marginTop: 80,
        marginLeft: 50,
        color:'lightcoral',
          borderColor:'lightcoral',
          textDecorationLine: 'inherit',

            }}
      >Inicio</Button>
      </Link>

      <Link to='/shop'> 
     <Button 
      variant="contained"
      size="large"
      style={{
        display:'flex',
        marginTop:-42,
        marginLeft: 150,
        backgroundColor: 'lightcoral',
        textDecorationLine: 'inherit',

      }}
      onClick={handleBuy}> Comprar </Button>
      </Link>
    </div>
  );
};

export default Papers;
