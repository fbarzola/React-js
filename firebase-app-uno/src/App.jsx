import "./App.css";
import { useEffect, useState } from "react";

// DB Firestore
import { db } from "./firebase/firebaseConfig";

// Firestore
import { collection, query, getDocs, where } from "firebase/firestore";

import CardPlayer from "./components/CardPlayer";

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const q = query(
        collection(db, "players")
        //,
        // where("position", "==", "goalkeeper")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPlayers(docs);
    };
    getPlayers();
  }, []);

  return (
    <div className="App">
      <h1>Firebase App</h1>
      <div className="grid">
        {players.map((player) => {
          return <CardPlayer key={player.id} player={player} />;
        })}
      </div>
    </div>
  );
};

export default App;
