import React, { useState } from "react";
import Modale from "../Pages/Modale";

function Novelties({ game }) {
  const [show, setShow] = useState(false);
  return (
    <div className="new-container">
      <Modale show={show} setShow={setShow} id={game.id} />
      <button
        type="button"
        className="button-new-games"
        onClick={() => setShow(game.id)}
      >
        <img src={game.background_image} alt="game" className="game-photo" />
        <div className="game-name">{game.name}</div>
      </button>
      <div className="underline" />
    </div>
  );
}

export default Novelties;
