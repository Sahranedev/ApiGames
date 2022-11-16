/* eslint-disable */
import React, { useState } from "react";
import Modale from "../Pages/Modale";

function Novelties({ game }) {
  const [show, setShow] = useState(false);
  return (
    <div className="col-6">
      <div className="row position-relative p-0 mx-md-1">
        <Modale show={show} setShow={setShow} id={game.id} />
        <img
          src={game.background_image}
          alt="game"
          type="button"
          className="img-fluid mx-0 d-block p-0 img-personnalized"
          onClick={() => setShow(game.id)}
        />
        <div className="col position-absolute bottom-0  text-personnalized bg-personnalized">
          {game.name}
        </div>
      </div>
    </div>
  );
}

export default Novelties;
