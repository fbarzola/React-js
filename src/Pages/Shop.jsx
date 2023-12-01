/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PaperShop from '../components/Paper/PaperShop';
import { AuthProvider, useAuth } from '../components/Header/AuthContext';
import { CartProvider } from '../components/Paper/CartContext';
import { useCart } from '../components/Paper/CartContext';
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const Shop = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();
  const { dispatch } = useCart();

  const cartData = {
    nombre: "Nombre",
    apellido: "Apellido",
    cantidad: "Cantidad",
    dni: "DNI",
    usuario: "Usuario",
    email: "Email",
    fechaCompra: "Fecha de Compra",
    precioTotal: "Precio Total",
    producto: "Producto",
  };

  const handleFinalizarCompra = async () => {
    setTimeout(async () => {
      if (isUserLoggedIn) {
        try {
          const docRef = await addDoc(collection(db, 'Compras'), cartData);
          const orderId = docRef.id;

          alert(`Compra Exitosa!! Verifique su e-mail, Su numero de order es: ${orderId}`);
          dispatch({ type: 'UPDATE_CART', payload: [] });
          navigate("/");
        } catch (error) {
          console.error('Error al guardar la compra: ', error);
          alert('Hubo un error al procesar la compra. Por favor, inténtelo de nuevo.');
        }
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
      <Button
        style={{
          display: 'block',
          fontSize: 'large',
          marginTop: '40px',
          textAlign: 'center',
          color: 'lightcoral',
          borderColor: 'lightcoral'
        }}
        variant='outlined' onClick={() => navigate("/")}>
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
          backgroundColor: 'lightcoral'
        }}
        variant='contained' onClick={handleFinalizarCompra}>
        Finalizar Compra!
      </Button>

      <h1></h1>
      <PaperShop cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Shop;
