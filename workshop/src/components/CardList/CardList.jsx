// import { useState, useEffect } from "react";

import CardComponent from "../CardComponent/CardComponent";

// CUSTOM HOOK
import useFetch from "../../hooks/useFetch";

const CardList = () => {
  // const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";
  const { data, loading } = useFetch(url);

  /*
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  */

  if (loading) return <p>Is Loading...</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "center",
        gap: 15,
        margin: 20,
      }}
    >
      {/*
      {users.map((user) => {
        return <CardComponent data={user} key={user.id} />;
      })}
    */}
      {data &&
        data.map((user) => {
          return (
            <div key={user.id}>
              <CardComponent data={user} />
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
