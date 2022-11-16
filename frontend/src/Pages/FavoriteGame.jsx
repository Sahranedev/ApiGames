/* eslint eqeqeq: 0 */

import React, { useState } from "react";
import "../Styles/favorite.css";
import Modale from "./Modale";

function FavoriteGame({ game, theme }) {
  const removeStorage = () => {
    const storedData = window.localStorage.games.split(",");
    const newData = storedData.filter((id) => id != game.id);
    window.localStorage.games = newData;
    window.location.reload();
  };
  const [show, setShow] = useState(false);
  return (
    <div className={`single-game-${theme}`}>
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <Modale show={show} setShow={setShow} id={game.id} theme={theme} />
          <button
            className="btn  pull-right"
            type="button"
            onClick={() => setShow(game.id)}
          >
            <img
              src={game.background_image}
              alt="game"
              className="game-photo-lg"
            />
          </button>
        </div>
        <div className={`game-name-${theme} col-md-7 col-sm-7 py-4`}>
          <button
            className="btn  pull-right"
            type="button"
            onClick={() => setShow(game.id)}
          >
            <h5>{game.name}</h5>
          </button>
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
