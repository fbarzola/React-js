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
      // Filtra los productos según la categoría seleccionada
      const filtered = products.filter(product => product.Category === selectedCategory);
      setFilteredProducts(filtered);
    } else {
      // Si no se selecciona ninguna categoría, muestra todos los productos
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
