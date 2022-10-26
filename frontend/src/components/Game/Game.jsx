import React from "react";
import dataTest from "./DataTest";
import Gamepresentation from "./Gamepresentation";

function Game({ gameList }) {
  return gameList !== undefined ? (
    <div>
      {gameList.map((game) => (
        <Gamepresentation key={game.id} {...game} />
      ))}
    </div>
  ) : null;
}

export default Game;
