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
    <div className={`d-flex single-game-${theme}`}>
      <div className="col-6">
        <div className="row position-relative p-0 mx-md-1">
          {/* Press to show modale */}
          <Modale show={show} setShow={setShow} id={game.id} theme={theme} />
          <img
            src={game.background_image}
            alt="game"
            type="button"
            className="img-fluid mx-0 d-block p-0 img-personnalized"
            onClick={() => setShow(game.id)}
          />
          <div
            className="col position-absolute bottom-0 text-center  text-personnalized bg-personnalized"
            onClick={() => setShow(game.id)}
            type="button"
          >
            {game.name}
          </div>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center">
        <button
          onClick={removeStorage}
          type="button"
          className="btn  pull-right"
        >
          <div className="like text-center" />
        </button>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default FavoriteGame;
