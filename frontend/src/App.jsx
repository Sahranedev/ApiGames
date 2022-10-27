import { useState, useEffect } from "react";
import Game from "./components/Game/Game";
import "./App.css";
import Mainpage from "./components/MainPage/Mainpage";

const API_URL =
  "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609";

export default function App() {
  const [games, setGames] = useState([]);

  const getGame = () => {
    fetch(`${API_URL}&page_size=10`)
      .then((response) => response.json())
      .then((result) => setGames(result.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div className="App">
      <Mainpage games={games} />
      <Game gameList={games} />
    </div>
  );
}
