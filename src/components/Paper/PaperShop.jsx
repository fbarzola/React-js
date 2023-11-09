/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 

const PaperShop = ({ cart, removeFromCart, updateCartCount }) => {

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
                alt={item.product.Title} src={item.product.image}
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
                    Precio Total: ${(parseFloat(item.product.price) * parseInt(item.quantity)).toString()}               
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
                      updateCartCount( item.quantity);
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
    </Paper>
    
  );
  
};


export default PaperShop;