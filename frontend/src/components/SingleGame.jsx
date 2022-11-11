import React, { useState, useEffect } from "react";
import "../Styles/singleGame.css";
import SingleGameDisplay from "./SingleGameDisplay";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "813e525c42c04986ac0747dddec96609";

function SingleGame({ id }) {
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
      <SingleGameDisplay {...game} />
    </div>
  );
}

export default SingleGame;
