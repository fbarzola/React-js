/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardDetail from '../components/CardPorduct/CardDetail';
import Tabs from '../components/Tabs/Tabs';
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Spinner from '../components/Spinner/Spinner';
import '../Css/Details.css';
import Papers from '../components/Paper/Papers';
import Button from '@mui/material/Button';

const Details = ({ addToCart }) => { 
  const navigate = useNavigate();
  const { productId } = useParams(); 
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState(null);
  const [quantityToBuy, setQuantityToBuy] = useState(0);

  useEffect(() => {
    const getProductDetail = async () => {
      const q = query(collection(db, '3Dstore'));
      const qWithFilter = query(q, where(documentId(), '==', productId));
      const querySnapshot = await getDocs(qWithFilter);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setProductDetail({ ...doc.data(), id: doc.id });
      }
    };
    getProductDetail();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="detail">
          <div className="card">
            {productDetail && <CardDetail product={productDetail} />}
            <div>
              <div>{productDetail && <Tabs product={productDetail} />}</div>
            </div>
          </div>
          <div className='paper'>
            {productDetail && (
              <Papers product={productDetail} addToCart={addToCart} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
