/* eslint eqeqeq: 0 */

import React from "react";
import "../Styles/favorite.css";

function FavoriteGame({ game, theme }) {
  const removeStorage = () => {
    const storedData = window.localStorage.games.split(",");
    const newData = storedData.filter((id) => id != game.id);
    window.localStorage.games = newData;
    window.location.reload();
  };
  return (
    <div className={`single-game-${theme}`}>
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <img
            src={game.background_image}
            alt="game"
            className="game-photo-lg"
          />
        </div>
        <div className="col-md-7 col-sm-7 py-4">
          <h5>{game.name}</h5>
        </div>
        <div className="col-md-3 col-sm-3 py-3 ">
          <button
            onClick={removeStorage}
            type="button"
            className="btn  pull-right"
          >
            <div className="like text-center" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteGame;
