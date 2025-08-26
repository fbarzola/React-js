import { useState } from "react";

/*
************
Render props
************

El término "render prop" se refiere a una técnica para compartir 
código entre componentes de React utilizando una prop cuyo valor 
es una función.
*/

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  // const increment = () => {
  // setCount(count + 1);
  // };

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return <div>{children(count, increment, decrement)}</div>;
};

export default Counter;
