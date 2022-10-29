import React from "react";
import GameListAffichage from "./GameListAffichage";

function GameList({ gameList }) {
  return (
    gameList && (
      <div>
        {gameList.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default GameList;
