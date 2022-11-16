import GameListDisplay from "./GameListDisplay";
import LinkToMainPage from "./LinkToMainPage";

function GameList({ gameList, theme, isLoading }) {
  return (
    // On récupère l'élément props gameList={games} depuis l'App
    gameList && (
      // On map le fonctionnement du composant GameListAffichage pour que cela reproduise exactement le même comportement
      <div className="vh-100 p-3 contain-fixed">
        {" "}
        <h2 className="m-3">Games filtered by revelance :</h2>
        <LinkToMainPage />
        {isLoading && <p>Loading ...</p>}
        {gameList.map((game) => (
          <GameListDisplay key={game.id} {...game} theme={theme} />
        ))}
      </div>
    )
  );
}

export default GameList;
