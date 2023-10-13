/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => navigate("/")}>Back to home page!</button>
    </div>
  );
};

export default Contact;

