import React, { useEffect, useState } from "react";
import "../Styles/favorite.css";
import FavoriteGame from "./FavoriteGame";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "5954a0ffab034307b0f8bb9adcd5f008";

function Favorites({ theme }) {
  // useState qui va contenir la liste des jeux mis en favoris sur le localStorage
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // si il ya des quelque chose dans la liste games du local storage,tu me le split et stock dans gameId siono gameId = []
    const gameId = window.localStorage.games
      ? window.localStorage.games.split(",")
      : [];
    // pour chaque id dans gameId,faire un fetch
    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < gameId.length; i++) {
      fetch(`${API_URL}/${gameId[i]}?key=${API_KEY}`)
        .then((res) => res.json())
        .then((results) => setListData((data) => [...data, results]));
    }
  }, []);
  return (
    <div className="container vh-100 md-p-5 ">
      <div className="row">
        <div className="col">
          <div className={`game-list-favorite-${theme}`}>
            <div
              className={`container p-md-5 vh-100 favorite-container-${theme}`}
            >
              <div className="container">
                <h2 className="p-md-5">Favorite</h2>
                {/* si il y'a quelque chose dans listeData tu me le map sinon tu renvoit un h2 Nothing fav */}
                {listData.length > 0 ? (
                  listData.map((game) => (
                    <FavoriteGame game={game} key={game.id} theme={theme} />
                  ))
                ) : (
                  <h2>Nothing fav for the moments</h2>
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
