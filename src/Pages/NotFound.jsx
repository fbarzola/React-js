import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return (
    <div>
      <h1>Error Page</h1>
      <p>Ud será redirigido a la home page en 2 seg...</p>
    </div>
  );
};

export default NotFound;
