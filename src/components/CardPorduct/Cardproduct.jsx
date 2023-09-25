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

const Cardproduct = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
        
      <CardMedia
        component="img"
        image={props.img}
        alt="Impresora Endler Pro"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar a Carrito</Button>
        <></>
        <Button size="small">Ver Espec.</Button>
      </CardActions>
    </Card>
  );
}

export default Cardproduct;