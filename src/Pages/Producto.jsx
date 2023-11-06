/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import CardProduct from '../components/CardPorduct/CardProduct';
import { useNavigate } from "react-router-dom";


const Producto = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  const categoryMapping = {
    'Impresoras_3D': 'impresora',
    'Impresiones_3D': 'impresion',
    'Repuestos_e_Insumos': 'repuesto',
  };

  useEffect(() => {
    const updateCategory = () => {
      const pathname = window.location.pathname;
      const parts = pathname.split('/');
      if (parts.length === 3 && parts[1] === 'producto') {
        const categoryNameFromURL = parts[2];
        setCategory(categoryMapping[categoryNameFromURL] || '');
      } else {
        setCategory('No se seleccionó ninguna categoría o la URL no es válida');
      }
    };

    updateCategory();
    window.addEventListener('popstate', updateCategory);

    return () => {
      window.removeEventListener('popstate', updateCategory);
    };
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ItemListContainer selectedCategory={category} />
    </div>
  );
};

export default Producto;

