/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


const CardProduct = ({ product }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          image={product.image}
          alt="3D" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.Title}
          </Typography>
          <Typography variant="h6" marginTop={2} color="text.secondary">
          Precio: ${product.price}
          </Typography>
          <h1></h1>
          <a><CreditCardOutlinedIcon /></a>
          <a> + </a>
          <a><LocalShippingOutlinedIcon /></a>
          <h6>Envio gratis y cuotas sin interes</h6>
        </CardContent>
        <Button
            variant="contained"
            size="large"
            component={Link} to={`/details/${product.id}`}
            style={{
              display: 'block',
              fontSize:'large',
              margin: '0 auto',
              marginTop: '1px',
              textAlign: 'center',
              backgroundColor: 'lightcoral' 
            }}
          >
          VER PRODUCTO
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;

