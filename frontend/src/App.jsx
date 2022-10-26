import axios from "axios";
import { useState, useEffect } from 'react';
import Game from "./components/Game/Game";
import "./App.css";
import Mainpage from "./components/MainPage/Mainpage";

function App() {
  const [game, setGame] = useState([]);

  const getGame = () => {
    let config = {
      method: "get",
      url: "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609",
    };

    axios(config)
      .then((response) => {
        setGame(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGame();
  }, [])

  return (
    <div className="App">
      <Mainpage />
      <Game gameList={game} />
    </div>
  );
}

export default App;
