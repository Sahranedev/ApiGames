import React from "react";
import GamePresentation from "./GamePresentation";

function Game({ gameList }) {
  return (
    gameList && (
      <div>
        {gameList.map((game) => (
          <GamePresentation key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default Game;
