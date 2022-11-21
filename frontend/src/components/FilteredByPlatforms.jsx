import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ButtonOrder from "./ButtonOrder";
import LinkToMainPage from "./LinkToMainPage";
import GameListDisplay from "./GameListDisplay";

function FiltredByPlatforms({ theme }) {
  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "17d306a6417e451dbac7946b20c1301c";

  /* Params to filter the ID */
  const { filtredListByPlatforms } = useParams();
  /* Stock platforms games */
  const [filter, setFilter] = useState();
  const [gamesFiltred, setGamesFiltred] = useState([]);

  /* Update the order of games */
  const [order, setOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Request API platforms by ID
  const getPlatformsList = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/platforms?key=${API_KEY}`
    );
    const result = await response.json();
    const platformsList = result.results;
    platformsList.forEach((platform) => {
      if (platform.slug === filtredListByPlatforms) {
        setFilter(platform.id);
      }
    });
  };

  /* Request API games filtred */
  const getFiltredList = async () => {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&platforms=${filter}&ordering=${
        order ? `+metacritic` : `-metacritic`
      }&page_size=20`
    );
    const gamesResult = await response.json();
    setGamesFiltred(gamesResult.results);
    setIsLoading(false);
  };

  /* UseEffect to call again the API when the platforms change (because the components not reload with navbar navigation) */
  useEffect(() => {
    getPlatformsList();
  }, [filtredListByPlatforms]);

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
        <div className="container-fluid d-md-flex align-items-center justify-content-md-between">
          <h2 className="col-md-11 col-fluid m-3 d-flex d-md-block justify-content-center justify-content-md-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#EDA017"
              className="bi bi-funnel"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
            </svg>{" "}
            Filtered {filtredListByPlatforms} games
          </h2>
          <div className="col-fluid d-flex justify-content-center">
            <LinkToMainPage />
          </div>
        </div>
        <div className="container">
          {isLoading && <Skeleton height={200} count={5} />}
        </div>
        <div className="container ">
          <div className="d-flex flex-row justify-content-end">
            <ButtonOrder order={order} setOrder={setOrder} />
          </div>
        </div>
        <div className="col-1" />
      </div>

      {gamesFiltred?.map((game) => (
        <GameListDisplay {...game} key={game.id} theme={theme} />
      ))}
    </div>
  );
}

export default FiltredByPlatforms;
