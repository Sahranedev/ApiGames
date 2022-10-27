import axios from "axios";
import { useState, useEffect } from "react";
import Game from "./components/Game/Game";
import "./App.css";
import Mainpage from "./components/MainPage/Mainpage";

export default function App() {
  const [games, setGames] = useState([]);

  const getGame = () => {
    const config = {
      method: "get",
      url: "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609",
    };

    axios(config).then((response) => {
      setGames(response.data.results);
    });
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div className="App">
      <Mainpage />
      <Game gameList={games} />
    </div>
  );
}
