import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import GameListDisplay from "./GameListDisplay";
import "react-loading-skeleton/dist/skeleton.css";

function News({ theme }) {
  /*  Loading screen */
  const [isLoading, setIsLoading] = useState(true);

  /* State to fix the date  */
  const [gameNews, setGameNews] = useState([]);

  /* make the date  */
  const date1 = new Date().toISOString().slice(0, 10);
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 2;

  const getNewsGames = () => {
    fetch(
      `https://api.rawg.io/api/games?key=5954a0ffab034307b0f8bb9adcd5f008&dates=${date1},${nextYear}&ordering=-added&page_size=20`
    )
      .then((response) => response.json())
      .then((result) => {
        setGameNews(result.results);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNewsGames();
  }, []);

  return (
    <div className="vh-100 p-3 contain-fixed">
      {" "}
      <h2 className="m-3">Incoming Games :</h2>
      <div className="container">
        {isLoading && <Skeleton height={200} count={5} />}
      </div>
      {gameNews?.map((game) => (
        <GameListDisplay {...game} key={game.id} theme={theme} />
      ))}
    </div>
  );
}

export default News;
