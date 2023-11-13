/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */


import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Header/Branding/3D_Store.png'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: 'withe', 
    marginTop:'80px' }}>
      <div className="logo-container">
        <Link to="/">
          <img src={img} alt="logo-3D-Store" className="logo" />
        </Link>
      </div>
      <div style={{ marginRight:'100px'}}>
        <h2>Gracias Por visitar nuestra pagina</h2>
        <h4>"Seguinos en redes"</h4>
        <div style={{
            marginTop:'15px',
            
        }}>
        <FacebookIcon/>
        <WhatsAppIcon/>
        <InstagramIcon/>        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
