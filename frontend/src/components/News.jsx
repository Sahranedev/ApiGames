import React, { useState, useEffect } from "react";
import GameListAffichage from "./GameListAffichage";

/* const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "813e525c42c04986ac0747dddec96609";
 */
function News() {
  const [gameNews, setGameNews] = useState([]);
  /* const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    }
    return month;
  };

  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    }
    return day;
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
  const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`; */

  const getNewsGames = () => {
    fetch(
      "https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609&dates=2022-10-30,2023-10-30&ordering=-added&page_size=5)"
    )
      .then((response) => response.json())
      .then((result) => {
        setGameNews(result.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNewsGames();
  }, []);

  return (
    <div>
      {gameNews?.map((game) => (
        <GameListAffichage {...game} key={game.id} />
      ))}
    </div>
  );
}

export default News;
