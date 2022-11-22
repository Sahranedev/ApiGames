import Skeleton from "react-loading-skeleton";
import GameListDisplay from "./GameListDisplay";
import LinkToMainPage from "./LinkToMainPage";

function GameList({ gameList, theme, isLoading }) {
  return (
    gameList && (
      /* Map the gamelistdisplay  */
      <div className="vh-100 p-3 contain-fixed">
        {" "}
        <div className="container-fluid d-md-flex align-items-center justify-content-md-between">
          <h2 className="col-md-11 col-fluid m-3 d-flex d-md-block justify-content-center justify-content-md-start ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#EDA017"
              className="bi bi-funnel"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
            </svg>{" "}
            Games filtered by revelance :
          </h2>
          <div className="col-fluid d-flex justify-content-center">
            <LinkToMainPage />
          </div>
        </div>
        <div className="container">
          {isLoading && <Skeleton height={200} count={5} />}
        </div>
        {gameList?.map((game) => (
          <GameListDisplay key={game.id} {...game} theme={theme} />
        ))}
      </div>
    )
  );
}

export default GameList;
