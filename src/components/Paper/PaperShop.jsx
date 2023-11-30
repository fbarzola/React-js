/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';

const PaperShop = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    dispatch({ type: 'UPDATE_CART', payload: updatedCart });
  };

  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <Paper elevation={3} style={{ padding: 20, marginLeft: 50, marginRight: 100, marginTop: 50, marginBottom: 50 }}>
      <Typography variant="h6" gutterBottom>
        Carrito de Compras
      </Typography>
      <List>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar
                style={{
                  display: 'flex',
                  marginTop: 75,
                  width: 100,
                  height: 100,
                }}
                alt={item.product.Title}
                src={item.product.image}
              />
            </ListItemAvatar>
            <ListItemText
              style={{
                display: 'flex',
                marginLeft: 90,
                marginTop: 100,
                flexDirection: 'column',
              }}
              primary={item.product.Title}
              secondary={
                <>
                  <Typography
                    style={{
                      display: 'flex',
                      marginLeft: 400,
                      marginBottom: 20,
                      marginTop: -25,
                    }}
                    component="span" variant="body2" color="textPrimary">
                    Cantidad: {item.quantity}
                  </Typography>
                  <Typography
                    style={{
                      display: 'flex',
                      marginLeft: 630,
                      marginTop: -40,
                    }}
                    component="span" variant="body2" color="textSecondary">
                    Precio Total: ${item.product.price * item.quantity}
                  </Typography>
                  <IconButton
                    style={{
                      display: 'flex',
                      marginLeft: 790,
                      marginTop: -30,
                    }}
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      removeFromCart(index);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom style={{ marginTop: 20, marginLeft: 750, fontSize: '25px' }}>
        Total a Pagar: ${totalPrice}
      </Typography>
    </Paper>
  );
};

export default PaperShop;
