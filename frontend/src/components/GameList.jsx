import "../Styles/gameList.css";
import ButtonOrder from "./ButtonOrder";
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
