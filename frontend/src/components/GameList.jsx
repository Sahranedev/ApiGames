import "../Styles/gameList.css";
import GameListAffichage from "./GameListAffichage";

function GameList({ gameList, searchValue }) {
  return (
    // On récupère l'élément props gameList={games} depuis l'App
    gameList && (
      // On map le fonctionnement du composant GameListAffichage pour que cela reproduise exactement le même comportement
      <div className=".d-md-block none shadow-lg p-3 mb-5 rounded game-list">
        <h2> Liste des jeux filtrés par " {searchValue} " </h2>
        {gameList.map((game) => (
          <GameListAffichage key={game.id} {...game} />
        ))}
      </div>
    )
  );
}

export default GameList;
