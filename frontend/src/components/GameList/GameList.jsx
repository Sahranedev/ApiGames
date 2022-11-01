import React from "react";

import "./gameList.css";
import GameListAffichage from "./GameListAffichage";

function GameList({ gameList }) {
  return (
    gameList && (
      <div className="game-list">
        {gameList.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default GameList;
