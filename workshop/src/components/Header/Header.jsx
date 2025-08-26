import { useState, useEffect } from "react";

import "./Header.css";
// Imagen
import img from "../Header/github-logo.png";

const Header = ({ title, children }) => {
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="Header">
      <h1>{title}</h1>
      <img src={img} alt="Logo Github" width="200px" />
      <p>Total Users: {users.length} </p>
      {children}
    </div>
  );
};

export default Header;
