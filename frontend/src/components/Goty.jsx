import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LinkToMainPage from "./LinkToMainPage";
import GameListDisplay from "./GameListDisplay";

const API_KEY = "17de4caa2f4543e6878ebbdafe4072c8";

function Goty({ theme }) {
  /*  Loading screen */
  const [isLoading, setIsLoading] = useState(true);

  /* make the date  */
  const date1 = new Date().toISOString().slice(0, 10);
  const currentYear = new Date().getFullYear();

  const [GOTYgames, setGOTYgames] = useState([]);
  const lastYear = currentYear - 2;

  const getGOTYGames = () => {
    fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastYear},${date1}&ordering=-added&page_size=20`
    )
      .then((response) => response.json())
      .then((data) => {
        setGOTYgames(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getGOTYGames();
  }, []);
  return (
    <div className="vh-100 p-3 contain-fixed">
      {" "}
      <div className="container-fluid d-md-flex align-items-center justify-content-md-between">
        <h2 className=" col-md-11 col-fluid m-3 d-flex d-md-block justify-content-center justify-content-md-start ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#EDA017"
            className="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>{" "}
          Games of the year
        </h2>
        <div className="col-fluid d-flex justify-content-center">
          <LinkToMainPage />
        </div>
      </div>
      <div className="container">
        {isLoading && <Skeleton height={200} count={5} />}
      </div>
      {GOTYgames?.map((game) => (
        <GameListDisplay {...game} key={game.id} theme={theme} />
      ))}
    </div>
  );
}

export default Goty;
