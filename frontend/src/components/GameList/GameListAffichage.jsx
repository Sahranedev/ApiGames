import React from "react";
import { Link } from "react-router-dom";
import "./gameListStyle.css";

function GameListAffichage({
  name,
  background_image: backgroundImage,
  metacritic,
  id,
}) {
  return (
    <div className="gamePageContainer">
      <Link to={`/game/${id}`}>
        <h2>{name}</h2>

        <img className="backgroundGameImage" src={backgroundImage} alt="jeu" />
      </Link>
      <div className="fav-metacritic">
        <div>❤️</div>
        <div>Note : {metacritic}</div>
      </div>
    </div>
  );
}

export default GameListAffichage;
