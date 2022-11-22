/* eslint-disable */
import React, { useEffect, useState } from "react";
import "../Styles/favorite.css";
import Skeleton from "react-loading-skeleton";
import FavoriteGame from "./FavoriteGame";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "17d306a6417e451dbac7946b20c1301c";

function Favorites({ theme }) {
  /* State to contain the game list put in favorite on the local storage */
  const [isLoading, setIsLoading] = useState(true);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    /* if something in the game list  of local storage, split and stock it  in GameId or gameID = [] */
    const gameId = window.localStorage.games
      ? window.localStorage.games.split(",")
      : [];
    /* for each gameID make a fetch  */
    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < gameId.length; i++) {
      fetch(`${API_URL}/${gameId[i]}?key=${API_KEY}`)
        .then((res) => res.json())
        .then((results) => setListData((data) => [...data, results]));
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="container  md-p-5 ">
      <div className="row">
        <div className="col">
          <div className={`game-list-favorite-${theme}`}>
            <div className={`container p-md-5 favorite-container-${theme}`}>
              <div className="container">
                <h2 className="p-md-5">Favorites</h2>
                {/* If there is something in listData, map it or send h2 tag */}
                {/*                 {isLoading && <Skeleton height={200} count={3} />}
                 */}{" "}
                {listData.length > 0 ? (
                  listData.map((game) => (
                    <FavoriteGame game={game} key={game.id} theme={theme} />
                  ))
                ) : (
                  <h3>... Nothing in your favorites for the moment</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
