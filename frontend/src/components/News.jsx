import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import GameListDisplay from "./GameListDisplay";
import "react-loading-skeleton/dist/skeleton.css";
import LinkToMainPage from "./LinkToMainPage";

const API_KEY = "17d306a6417e451dbac7946b20c1301c";

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
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=${date1},${nextYear}&ordering=-added&page_size=20`
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
    <div className="p-3 contain-fixed ">
      {" "}
      <div className="container-fluid d-md-flex align-items-center justify-content-md-between ">
        <h2 className="col-md-11 col-fluid m-3 d-flex d-md-block justify-content-center justify-content-md-start">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#EDA017"
            className="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          {"   "}
          Incoming Games :
        </h2>
        <div className="col-fluid d-flex justify-content-center">
          <LinkToMainPage />
        </div>
      </div>
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
