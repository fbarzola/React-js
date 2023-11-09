/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import CardProduct from '../CardPorduct/CardProduct';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const handleBuyClick = () => {
    
    incrementCartCount();
  };

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "3Dstore"));
    
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setFilteredProducts(docs);
      setIsLoading(false); 
    };

    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className='Card-List'>
          {filteredProducts.filter(product => !selectedCategory || product.Category === selectedCategory)
            .map((product) => (
              <div key={product.id}>
                <CardProduct product={product} />
              </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;

