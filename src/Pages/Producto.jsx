/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import CardProduct from '../components/CardPorduct/CardProduct';


const Producto = () => {
  const [category, setCategory] = useState('');

  console.log(category);

    const categoryMapping = {
    'Impresoras_3D': 'Impresora',
    'Impresiones_3D': 'impresion',
    'Repuestos_e_Insumos': 'repuesto',
  };

  
  useEffect(() => {
    const pathname = window.location.pathname;
      const parts = pathname.split('/');
    if (parts.length === 3 && parts[1] === 'producto') {
      const categoryNameFromURL = parts[2];
        setCategory(categoryMapping[categoryNameFromURL] || '');
    } else {
      setCategory('No se seleccionó ninguna categoría o la URL no es válida');
    }
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ItemListContainer selectedCategory={category} />
    </div>
  );
};

export default Producto;
