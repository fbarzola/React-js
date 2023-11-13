/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import img from "./Branding/3D_Store.png";
import './header.css';
import { IconButton, Popover, Typography, TextField, Button, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth,  onAuthStateChanged, signOut } from 'firebase/auth';
import { AuthProvider, useAuth } from '../Header/AuthContext';


const theme = createTheme({
  typography: {
    poster: {
      fontSize: 55,
      color: 'black',
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

const authenticateUser = async (username, password) => {
  const usersCollection = collection(db, 'Usuarios');
  const q = query(usersCollection, where('usuario', '==', username), where('contrasena', '==', password));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 1) {
    const authenticatedUser = querySnapshot.docs[0].data();
    return authenticatedUser;
  } else {
    return null;
  }
};

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const successTimeout = 2000;
  const errorTimeout = 2000;
  const [welcomeMessage, setWelcomeMessage] = useState(null);
  const [showAccount, setShowAccount] = useState(true); 
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const { setIsUserLoggedIn } = useAuth(false);

 

  const navigate = useNavigate();
  const auth = getAuth(); 

  const handleRegisterClick = () => {
    navigate('/register');
  };  

  const handleOpenForm = (event) => {
    setIsFormOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    
    setIsErrorVisible(false);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
  
    const authenticatedUser = await authenticateUser(username, password);

    handleCloseForm();
 
    if (authenticatedUser) {
      setUser(authenticatedUser);
      setSuccess(true);
      setError(false);
      setIsErrorVisible(false);
      setTimeout(() => {
      setSuccess(false);
      setIsUserLoggedIn(true);

      }, successTimeout);
  
      setWelcomeMessage(`Bienvenido, ${username}`);
      setShowAccount(false);
    } else {
      setError(true);
      setIsErrorVisible(true);
      setTimeout(() => {
        setError(false);
        setIsErrorVisible(false);
      }, errorTimeout)
      
      setTimeout(() => {
        handleCloseForm();
      }, errorTimeout);
    }
  };
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsUserLoggedIn(false);
        setUser(null);
        setWelcomeMessage(null);
        setShowAccount(true);
        
      })
      .catch((error) => {
        console.error('Error al cerrar sesión: ', error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setWelcomeMessage(`Bienvenido, ${currentUser.displayName}`);
      } else {
        setIsUserLoggedIn(false);
        setUser(null);
        setWelcomeMessage(null);
        setShowAccount(true);
      }
    });
  }, [auth]);



  return (
    <ThemeProvider theme={theme}>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img src={img} alt="logo-3D-Store" className="logo" />
          </Link>
        </div>
        <div style={{
          marginLeft: 28,
        }}>
        <Typography style={{
          fontSize: 45,
          display: 'flex',
          marginLeft: 30,
          marginTop: 40,
          textAlign: 'center',
          width: '100%',
        }} variant="poster">Bienvenido a 3D-Store</Typography>
          <p style={{
            marginLeft: 38,
            marginRight: 20,
            width: '50%',
          }}>Explore Nuestros productos 3D</p>
        </div>
        <div style={{ marginTop: -120, marginRight:20 }}>
          {user ? (
            <Typography variant="body1" style={{ marginTop: '35px' , color: 'black', fontWeight: 'bold' }}>
              {welcomeMessage}
            </Typography>
          ) : null}
          {showAccount && ( 
            <IconButton 
              style={{ gap:'10px', 
              display: 'flex',
              alignItems: 'center',
            }}
              onClick={handleOpenForm}>
              <AccountCircleIcon />
              <Typography variant="body1">Mi cuenta</Typography>
            </IconButton>
          )}
          <Popover
            open={isFormOpen}
            anchorEl={anchorEl}
            onClose={handleCloseForm}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <form onSubmit={handleSubmitForm} style={{ padding: '10px', marginLeft:'50px'}}>
              <TextField label="usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              <h1></h1>
              <TextField 
               label="Contraseña"
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               />
              <Button style={{
               display:'flex',
               marginTop: 30,
                backgroundColor:"lightcoral"
              }} type="submit" variant="contained" >
                Ingresar
              </Button>
              <Button 
              style={{
                display:'flex',
                marginLeft:120,
                marginTop:-37,
                color:'lightcoral',
                borderColor:'lightcoral'
              }}
               type="submit" variant="outlined" color="primary" onClick={handleRegisterClick} >
                Registrarse
              </Button>
            </form>
          </Popover>
          {success &&  (
            <Alert 
            style={{ marginTop: '50px', display: 'flex' }}
            severity="success">Ingreso exitoso</Alert>
          )}
          {error && isErrorVisible && (
            <Alert 
            style={{ marginTop: '50px', display: 'flex' }}
            severity="error">Error de usuario o contraseña</Alert>
          )}
          {user && (
            <Button
              style={{
                marginTop: '10px',
                marginLeft: '-10px',
                display: 'flex',
                color: 'lightcoral',
              }}
              onClick={handleSignOut}
            >
              Cerrar sesión
            </Button>
            
          )}
        </div>
      </header>
    </ThemeProvider>
  );
};

export default Header;
