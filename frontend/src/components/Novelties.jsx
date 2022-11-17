/* eslint-disable */
import React, { useState } from "react";
import Modale from "../Pages/Modale";

function Novelties({ game, theme }) {
  const [show, setShow] = useState(false);
  return (
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
  );
}

export default Novelties;
