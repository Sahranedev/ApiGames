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
        <h2 className="col-10">Filtered {filtredListByPlatforms} games</h2>
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
