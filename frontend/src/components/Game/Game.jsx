import React from "react";
import Gamepresentation from "./Gamepresentation";

function Game({ gameList }) {
  return (
    gameList && (
      <div>
        {gameList.map((game) => (
          <Gamepresentation key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default Game;
