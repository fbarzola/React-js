/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const CardWidget = ({ cartCount }) => {
  return (
    <div style={{
      display: 'flex',
      marginLeft:'0',
    }}>
      <Link to='/shop' >
        <AddShoppingCartIcon/>
        
      </Link>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CardWidget;

