/* eslint eqeqeq: 0 */
/* eslint-disable */
import React, { useState } from "react";
import "../Styles/favorite.css";
import Modale from "./Modale";

function FavoriteGame({ game, theme }) {
  const [isFavorite, setIsFavorite] = useState(true);
  const storedData = window.localStorage.games.split(",");
  const newData = storedData.filter((id) => id != game.id);
  const removeStorage = () => {
    window.localStorage.games = newData;
    setIsFavorite(!isFavorite);
  };
  const [show, setShow] = useState(false);

  return isFavorite ? (
    <div className={`single-game-${theme}`}>
      <div className="row d-flex ">
        <div className="col-3 ">
          <Modale show={show} setShow={setShow} id={game.id} theme={theme} />

          <img
            src={game.background_image}
            alt="game"
            className="img-fluid game-photo"
            type="button"
            onClick={() => setShow(game.id)}
          />
        </div>
        <div className="col-9 d-flex">
          <div
            className={`game-name-${theme} col-11 py-5 m-1 d-flex justify-content-center`}
          >
            <button
              className="btn  pull-right d-none d-md-block"
              type="button"
              onClick={() => setShow(game.id)}
            >
              <h5>{game.name}</h5>
            </button>
          </div>
          <div className="col-1  d-flex justify-content-center py-5 ">
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
    </div>
  ) : (
    <div />
  );
}

export default FavoriteGame;
