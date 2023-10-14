/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./ItemListContainer.css";
import { useEffect, useState } from 'react';
import CardProduct from '../CardPorduct/CardProduct';
import products from '../ItemListContainer/ItemList.json';

const ItemListContainer = ({ selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(product => product.Category === selectedCategory);
      setFilteredProducts(filtered);
    } else {
      
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  return (
    <div className='Card-List'>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
