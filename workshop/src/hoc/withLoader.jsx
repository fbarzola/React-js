import { useState } from "react";

/*
************
HOC
************

Un componente de orden superior (HOC) es una técnica avanzada en React 
para reutilizar la lógica de componentes. Los HOC no forman parte de la
API de React per se, sino que son un patrón que surge de la naturaleza 
compositiva de React.

Concretamente, un componente de orden superior es una función que toma un
componente y devuelve un nuevo componente.

Es una técnica usada en React, para poder reutilizar la lógica de
un componente a lo largo de un proyecto
*/

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return (
      <div>
        {loading ? <p>Loading HOC...</p> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withLoader;
