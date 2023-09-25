/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from "./3D_Store.png";
import './header.css';
import { Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    poster: {
      fontSize: 60,
      color:'black',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          poster: 'h1',
        },
      },
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <div className="logo-container">
          <img src={img} alt="logo-3D-Store" className="logo" />
        </div>
        <div className="text-container">
          <Typography variant="poster">Bienvenido a 3D-Store</Typography>
          <p>Explore Nuestros productos 3D</p>
        </div>
      </header>
    </ThemeProvider>
  );
};

export default Header;