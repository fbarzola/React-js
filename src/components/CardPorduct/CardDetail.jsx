/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardDetail = ({product}) => {

  if (!product) {
    return <div>No se encontró el producto</div>;
  }
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
           component="img"
           image={product.image}
           alt="Impresora 3D" 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default CardDetail;

