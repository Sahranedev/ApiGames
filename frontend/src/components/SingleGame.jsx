import React, { useState, useEffect } from "react";
import SingleGameAffichage from "./SingleGameDisplay";
import "../Styles/singleGame.css";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "b6d47b1b6d1d4e37a348869c6f3fa8a3";
/* b6d47b1b6d1d4e37a348869c6f3fa8a3
13e525c42c04986ac0747dddec96609 */

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
      <SingleGameAffichage {...game} />
    </div>
  );
}

export default SingleGame;
