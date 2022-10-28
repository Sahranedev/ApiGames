import { useState } from "react";
import Game from "./components/Game/Game";
import "./App.css";
import Mainpage from "./components/MainPage/Mainpage";

const API_URL =
  "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [games, setGames] = useState([]);

  const getGame = () => {
    fetch(`${API_URL}&search=${searchValue}&page_size=50`)
      .then((response) => response.json())
      .then((result) => setGames(result.results))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Mainpage
        getGame={getGame}
        games={games}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Game gameList={games} />
    </div>
  );
}
