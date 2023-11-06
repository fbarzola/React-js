
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    birthDate: "",
    ciudad: "",
    dni: "",
    email: "",
    email2: "",
    contrasena: "",
    usuario: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    nombre: "",
    apellido: "",
    birthDate: "",
    ciudad: "",
    dni: "",
    email: "",
    email2: "",
    contrasena: "",
    usuario:"",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const newValidationErrors = { ...validationErrors };

    if (!/^[A-Za-z\s]+$/.test(formData.nombre)) {
      valid = false;
      newValidationErrors.nombre = "Nombre no válido";
    }

    if (!/^[A-Za-z\s]+$/.test(formData.apellido)) {
      valid = false;
      newValidationErrors.apellido = "Apellido no válido";
    }

    if (!/^[A-Za-z\s]+$/.test(formData.ciudad)) {
      valid = false;
      newValidationErrors.ciudad = "Ciudad no válida";
    }

    if (formData.email !== formData.email2) {
      valid = false;
      newValidationErrors.email2 = "Los correos electrónicos no coinciden";
    }

    if (!/^\d{1,8}$/.test(formData.dni)) {
      valid = false;
      newValidationErrors.dni = "DNI no válido";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      valid = false;
      newValidationErrors.email = "Email no válido";
    }
    
    if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(formData.birthDate)) {
      valid = false;
      newValidationErrors.birthDate = "Fecha de nacimiento no válida (dd/mm/aaaa)";
    }

    setValidationErrors(newValidationErrors);

    if (!valid) {
      return;
    }

    try {

      const isoDate = formData.birthDate
        ? new Date(formData.birthDate.split("/").reverse().join("-")).toISOString()
        : null;

      const docRef = await addDoc(collection(db, "Usuarios"), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        birthDate: isoDate,
        ciudad: formData.ciudad,
        dni: formData.dni,
        email: formData.email,
        email2: formData.email2,
        contrasena: formData.contrasena,
        usuario: formData.usuario,
      });

      console.log("Documento creado con ID: ", docRef.id);

      setFormData({
        nombre: "",
        apellido: "",
        birthDate: "",
        ciudad: "",
        dni: "",
        email: "",
        email2: "",
        contrasena: "",
        usuario:"",
      });
    } catch (error) {
      console.error("Error al agregar documento: ", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography style={{ marginTop: 30 }} variant="h4">
        Registrarse
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ marginTop: 20 }}
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleFormChange}
          fullWidth
          required
          error={!!validationErrors.nombre}
          helperText={validationErrors.nombre}
        />
        <TextField
          style={{ marginTop: 20 }}
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleFormChange}
          fullWidth
          required
          error={!!validationErrors.apellido}
          helperText={validationErrors.apellido}
        />
        <TextField
          style={{ marginTop: 20 }}
          label="Usuario"
          name="usuario"
          value={formData.usuario}
          onChange={handleFormChange}
          fullWidth
          required
          error={!!validationErrors.usuario}
          helperText={validationErrors.usuario}
        />

         <TextField
          style={{ marginTop: 20 }}
          label="Fecha de Nacimiento (dd/mm/aaaa)"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleFormChange}
          fullWidth
          required
          error={!!validationErrors.birthDate}
          helperText={validationErrors.birthDate}
        />
        <TextField
          style={{ marginTop: 20 }}
          label="Ciudad"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleFormChange}
          fullWidth
          required
          error={!!validationErrors.ciudad}
          helperText={validationErrors.ciudad}
        />
        <TextField
          style={{ marginTop: 20 }}
          label="DNI"
          name="dni"
          value={formData.dni}
          onChange={handleFormChange}
          fullWidth
          required
          error={!!validationErrors.dni}
          helperText={validationErrors.dni}
        />
          <TextField
            style={{ marginTop: 20 }}
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
            error={!!validationErrors.email}
            helperText={validationErrors.email}
          />
          <TextField
            style={{ marginTop: 20 }}
            label="Confirmar Email"
            name="email2"
            type="email"
            value={formData.email2}
            onChange={handleFormChange}
            fullWidth
            required
            error={!!validationErrors.email2}
            helperText={validationErrors.email2}
          />
          <TextField
            style={{ marginTop: 20 }}
            label="Contraseña"
            name="contrasena"
            type="contrasena"
            value={formData.contrasena}
            onChange={handleFormChange}
            fullWidth
            required
            error={!!validationErrors.contrasena}
            helperText={validationErrors.contrasena}
          />
          
          <Button
            onClick={handleSubmit}
            style={{ marginTop: 20, backgroundColor: "lightcoral" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Registrase
          </Button>
        </form>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          style={{ 
            marginTop: "16px",
            color:'lightcoral',
            borderColor:'lightcoral'
          }}
  
        >
          Volver al inicio
        </Button>
        <h1 style={{ marginBottom: 30 }}></h1>
      </Container>
    );
  };

export default Register