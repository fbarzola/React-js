/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PaperShop from '../components/Paper/PaperShop';
import { useAuth } from '../components/Header/AuthContext';
import { useCart } from '../components/Paper/CartContext';
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';

const Shop = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn, user } = useAuth();
  const { dispatch } = useCart();
  const [orderId, setOrderId] = useState(null);

  const getUserData = async () => {
    if (isUserLoggedIn) {
      try {
        const userDocRef = doc(db, 'Usuarios');
        const userDoc = await getDoc(userDocRef);
        return userDoc.data() || {};
      } catch (error) {
        return {};
      }
    } else {
      return {};
    }
  };

  const handleFinalizarCompra = async () => {
    if (isUserLoggedIn) {
      try {
        const isoDate = new Date().toISOString();
  
        const userData = await getUserData();
  
        const totalPrecio = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
        const productosCompra = cart.map((item) => ({
          nombre: item.product.Title || '',
          Cantidad: item.quantity || 0,
          PrecioTotal: (item.product.price * item.quantity).toFixed(2) || '0.00',
        }));
  
        const purchaseDocRef = await addDoc(collection(db, 'Compras'), {
          nombre: userData.nombre || 'Nombre no disponible',
          apellido: userData.apellido || 'Apellido no disponible',
          dni: userData.dni || 'DNI no disponible',
          usuario: userData.usuario || 'Usuario no disponible',
          email: userData.email || 'Email no disponible',
          fechaCompra: isoDate,
          producto: productosCompra,
        });
  
        setOrderId(purchaseDocRef.id);
  
        dispatch({ type: 'UPDATE_CART', payload: [] });
        navigate('/');
  
        alert(`Compra Exitosa!! Verifique su e-mail, Su numero de order es: ${purchaseDocRef.id}`);
      } catch (error) {
        console.error('Error al guardar la compra: ', error);
        alert('Hubo un error al procesar la compra. Por favor, inténtelo de nuevo.');
      }
    } else {
      alert('Primero debes registrarte');
      navigate('/register');
    }
  };

  return (
    <div style={{ marginTop: 50, marginLeft: 100 }}>
      <h1>Carrito de Compras</h1>
        <h1></h1>
      <Button
        style={{
          display: 'block',
          fontSize: 'large',
          marginTop: '40px',
          textAlign: 'center',
          color: 'lightcoral',
          borderColor: 'lightcoral',
        }}
        variant='outlined'
        onClick={() => navigate('/')}
      >
        Seguir Comprando
      </Button>
      <h1></h1>
      <Button
        style={{
          display: 'block',
          fontSize: 'large',
          marginLeft: '2px',
          marginTop: '10px',
          textAlign: 'center',
          backgroundColor: 'lightcoral',
        }}
        variant='contained'
        onClick={handleFinalizarCompra}
      >
        Finalizar Compra!
      </Button>

      <h1></h1>
      <PaperShop cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Shop;
