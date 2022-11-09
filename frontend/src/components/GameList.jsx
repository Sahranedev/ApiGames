import "../Styles/gameList.css";
import GameListAffichage from "./GameListAffichage";

function GameList({ gameList }) {
  return (
    gameList && (
      <div className=".d-md-block none shadow-lg p-3 mb-5 rounded game-list">
        {gameList.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default GameList;
