import React from "react";

function Novelties({ game }) {
  return (
    <div>
      <img src={game.background_image} alt="game" className="game-photo" />
    </div>
  );
}

export default Novelties;
