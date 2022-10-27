import { useEffect, useState } from "react";
import Game from "./components/Game/Game";
import "./App.css";
import Mainpage from "./components/MainPage/Mainpage";

const API_URL =
  "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609";

export default function App() {
  const [searchValue, setSearchValue] = useState("Dom");
  const [games, setGames] = useState([]);

  const getGame = () => {
    fetch(`${API_URL}&search=${searchValue}&page_size=5`)
      .then((response) => response.json())
      .then((result) => setGames(result.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div className="App">
      <Mainpage
        games={games}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Game gameList={games} />
    </div>
  );
}
