import React, { useState, useEffect } from "react";
import "../Styles/singleGame.css";
import SingleGameDisplay from "./SingleGameDisplay";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "5954a0ffab034307b0f8bb9adcd5f008";

function SingleGame({ id, theme }) {
  /* API call for single game  */
  const [game, setGame] = useState([]);

  const getSingleGame = async () => {
    const response = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
    const result = await response.json();
    setGame(result);
  };

  useEffect(() => {
    getSingleGame();
  }, []);

  return (
    <div>
      <SingleGameDisplay game={game} {...game} theme={theme} />
    </div>
  );
}

export default SingleGame;
