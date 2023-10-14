/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../components/CardPorduct/CardDetail';
import products from '../components/ItemListContainer/ItemList.json';

const Details = () => {
    
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <CardDetail product={product} />
    </div>
  );
};

export default Details;
