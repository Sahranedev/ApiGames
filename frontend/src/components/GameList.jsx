import "../Styles/gameList.css";
import GameListAffichage from "./GameListAffichage";

function GameList({ gameList, searchValue }) {
  return (
    gameList && (
      <div className="game-list">
        <h2> Liste des jeux filtrés par " {searchValue} " </h2>
        {gameList.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default GameList;
