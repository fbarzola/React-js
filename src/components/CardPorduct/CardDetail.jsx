/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import product from '../../Pages/Details';

const CardDetail = ({product}) => {


if (!product) {
  return <div>Cargando...</div>; 
}
    return (
    <Card sx={{ maxWidth: 350, marginLeft: 4, marginRight:1, marginTop: 1, backgroundColor:'none',   border:'none' }}>
      <CardActionArea>
        <CardMedia
           component="img"
           image={product.image}
           alt="3D" 
          
        />
        
      </CardActionArea>
    </Card>
  );
}


export default CardDetail;

