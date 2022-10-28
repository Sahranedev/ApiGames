import React from "react";
import GameAffichage from "./GameAffichage";

function Game({ gameList }) {
  return (
    gameList && (
      <div>
        {gameList.map((game) => (
          <GameAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default Game;
