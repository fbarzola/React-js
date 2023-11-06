/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    ciudad: "",
    dni: "",
    email: "",
    nota: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    nombre: "",
    apellido: "",
    ciudad: "",
    dni: "",
    email: "",
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

    if (!/^\d{1,8}$/.test(formData.dni)) {
      valid = false;
      newValidationErrors.dni = "DNI no válido";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      valid = false;
      newValidationErrors.email = "Email no válido";
    }

    setValidationErrors(newValidationErrors);

    if (!valid) {
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "consultas"), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        ciudad: formData.ciudad,
        dni: formData.dni,
        email: formData.email,
        nota: formData.nota,
      });

      console.log("Documento creado con ID: ", docRef.id);

      
      setFormData({
        nombre: "",
        apellido: "",
        ciudad: "",
        dni: "",
        email: "",
        nota: "",
      });
    } catch (error) {
      console.error("Error al agregar documento: ", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography style={{ marginTop: 30 }} variant="h4">
        Contactenos
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
          label="Nota o Pregunta"
          name="nota"
          multiline
          rows={4}
          value={formData.nota}
          onChange={handleFormChange}
          fullWidth
        />
        <Button
          style={{ marginTop: 20, backgroundColor: "lightcoral" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Enviar
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

export default Contact;
