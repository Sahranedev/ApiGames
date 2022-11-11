import React, { useState, useEffect } from "react";
import GameListAffichage from "./GameListAffichage";

function News() {
  /*   const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "813e525c42c04986ac0747dddec96609"; */
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

  /* const currentYear = new Date().getFullYear().toISOString().slice(0, 10);

  const date1 = new Date().toISOString().slice(0, 10); */

  /* const date1 = new Date().toISOString().slice(0, 10);
  const newArr = [];
  const date2 = newArr.push(date1);
  const date3 = newArr.join("-");

  console.log(date1);
  console.log(newArr);
  console.log(date3);
 */

  /*   const currentYear = new Date().getFullYear(); */

  const date1 = new Date().toISOString().slice(0, 10);
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 2;
  /* Solution temporaire le temps que j'arrive à trouver une fonction qui permettrait d'incrémenter l'année de bordure en format ISO (toléré par l'URL) */
  const getNewsGames = () => {
    fetch(
      `https://api.rawg.io/api/games?key=813e525c42c04986ac0747dddec96609&dates=${date1},${nextYear}&ordering=-added&page_size=20`
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
      {/* On map la data stocké dans le state en y injectant en élément le spread de la propriété game */}
      {gameNews?.map((game) => (
        <GameListAffichage {...game} key={game.id} />
      ))}
    </div>
  );
}

export default News;
