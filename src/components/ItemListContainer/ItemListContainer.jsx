/* eslint-disable no-unused-vars */
import React from 'react';
import "./ItemListContainer.css";
import { useEffect, useState } from 'react';
import CardProduct from '../CardPorduct/CardProduct';
import products from './ItemList.json';

const ItemListContainer = () => {
  return (
    <div className='Card-List'>
      {products.map((product) => (
        <div key={product.id}>
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
