import React, { useState, useEffect } from "react";
import "../Styles/singleGame.css";
import Skeleton from "react-loading-skeleton";
import SingleGameDisplay from "./SingleGameDisplay";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "17d306a6417e451dbac7946b20c1301c";

function SingleGame({ id, theme }) {
  const [isLoading, setIsLoading] = useState(true);
  /* API call for single game  */
  const [game, setGame] = useState([]);

  const getSingleGame = async () => {
    const response = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
    const result = await response.json();
    setGame(result);
  };

  useEffect(() => {
    getSingleGame();
    setIsLoading();
  }, []);

  return (
    <div>
      {isLoading && <Skeleton height={200} count={1} />}
      <SingleGameDisplay game={game} {...game} theme={theme} />
    </div>
  );
}

export default SingleGame;
