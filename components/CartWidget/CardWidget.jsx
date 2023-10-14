/* eslint-disable no-unused-vars */
import React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const CardWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <AddShoppingCartIcon />
    <span style={{ marginLeft: '5px' }}>1</span>
  </div>
  );
};

export default CardWidget