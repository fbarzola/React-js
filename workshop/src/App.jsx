import "./App.css";

// componentes
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import MyComponent from "./components/MyComponent/MyComponent";

// HOC
import User from "./components/User/User";
import withLoader from "./hoc/withLoader";

const UserWithLoader = withLoader(User);

// withLoader => el hoc que toma x param el componente que le pasemos
// User => el componente que pasamos por parametro
// UserWithLoader => nuestro nuevo componente

const App = () => {
  return (
    <div className="App">
      <Header title="Patrones de diseño en React" />
      <div>
        <MyComponent></MyComponent>
      </div>
      <div>
        <h1>HOC</h1>
        <UserWithLoader />
      </div>
      <main style={{ height: "auto" }}>
        <CardList />
      </main>
      <Header title="Footer">
        <button onClick={() => alert("145 users in total")}>
          Alert Total Users
        </button>
      </Header>
    </div>
  );
};

export default App;
