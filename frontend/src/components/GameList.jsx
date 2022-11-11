import "../Styles/gameList.css";
import GameListAffichage from "./GameListDisplay";
import LinkToMainPage from "./LinkToMainPage";

function GameList({ gameList, searchValue }) {
  return (
    gameList && (
      <div className=".d-md-block none shadow-lg p-3 mb-5 rounded game-list">
        <h2> Liste des jeux filtrés par " {searchValue} " </h2>
        <LinkToMainPage />
        {gameList.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default GameList;
