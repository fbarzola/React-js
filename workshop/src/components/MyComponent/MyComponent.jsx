import Counter from "../Counter/Counter";

const MyComponent = () => {
  return (
    <Counter>
      {(count, increment, decrement) => (
        <div>
          <h2>Contador</h2>
          <p>Valor: {count}</p>
          <button onClick={() => increment()}>incrementar</button>
          <button onClick={() => decrement()}>decrementar</button>
        </div>
      )}
    </Counter>
  );
};

export default MyComponent;
