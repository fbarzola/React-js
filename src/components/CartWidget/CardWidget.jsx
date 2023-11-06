/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const CardWidget = ({ cartCount, handleIncrement }) => {
  return (
    <div>
      <Link to='/shop' onClick={handleIncrement}>
        <AddShoppingCartIcon
        style={{
          textDecoration: 'none',
        }}
        />
        {cartCount > 0 && <span>{cartCount}</span>}
      </Link>
    </div>
  );
};

export default CardWidget;

