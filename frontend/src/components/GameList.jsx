import Skeleton from "react-loading-skeleton";
import GameListDisplay from "./GameListDisplay";
import LinkToMainPage from "./LinkToMainPage";

function GameList({ gameList, theme, isLoading }) {
  return (
    gameList && (
      /* Map the gamelistdisplay  */
      <div className="vh-100 p-3 contain-fixed">
        {" "}
        <h2 className="m-3">Games filtered by revelance :</h2>
        <div className="container">
          {isLoading && <Skeleton height={200} count={5} />}
        </div>
        <LinkToMainPage />
        {gameList.map((game) => (
          <GameListDisplay key={game.id} {...game} theme={theme} />
        ))}
      </div>
    )
  );
}

export default GameList;
