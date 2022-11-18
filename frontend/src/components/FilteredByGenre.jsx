import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import GameListAffichage from "./GameListDisplay";
import ButtonOrder from "./ButtonOrder";
import LinkToMainPage from "./LinkToMainPage";

function FiltredByGenre({ theme }) {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "f88c36680add4122a8999654d4320443";

  /* Params to filter the ID */

  const { filtredListByGenre } = useParams();

  /* Stock genre games */
  const [filter, setFilter] = useState();
  const [gamesFiltred, setGamesFiltred] = useState([]);
  /* Update the order of games */
  const [order, setOrder] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  // Request API platforms by ID
  const getGenreList = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const result = await response.json();
    const genreList = result.results;
    genreList.forEach((genre) => {
      if (genre.slug === filtredListByGenre) {
        setFilter(genre.id);
      }
    });
  };

  /* Request API games filtred */
  const getFiltredList = async () => {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&genres=${filter}&ordering=${
        order ? `+metacritic` : `-metacritic`
      }&page_size=20`
    );
    const gamesResult = await response.json();
    setGamesFiltred(gamesResult.results);
    setIsLoading(false);
  };

  // On utilise un useEffect basé sur l'évolution du filtredList pour réactualiser la requête
  // quand on change de plateforme depuis le menu, vu qu'onn ne change pas de composant sinon ça ne recharge pas
  useEffect(() => {
    getGenreList();
  }, [filtredListByGenre]);

  /* useRef is use here to fix the state of functions fetched */
  const isMount = useRef(false);
  useEffect(() => {
    if (isMount.current) {
      getFiltredList();
    } else {
      isMount.current = true;
    }
  }, [filter]);

  /* Update the order of games */

  useEffect(() => {
    getFiltredList();
  }, [order]);

  return (
    <div>
      <div className="row d-flex justify-content-between ml-5 mr-5 p-3">
        <h2 className="col-10">Filtered {filtredListByGenre} games</h2>
        <div className="container">
          {isLoading && <Skeleton height={200} count={5} />}
        </div>
        <div className="container ">
          <div className="d-flex flex-row justify-content-center">
            <ButtonOrder order={order} setOrder={setOrder} />
            <div className="">
              <LinkToMainPage />
            </div>
          </div>
          <div className="container">
            {isLoading && <Skeleton height={200} count={5} />}
          </div>
        </div>
        <div className="col-1" />
      </div>

      {gamesFiltred?.map((game) => (
        <GameListAffichage {...game} key={game.id} theme={theme} />
      ))}
    </div>
  );
}

export default FiltredByGenre;
