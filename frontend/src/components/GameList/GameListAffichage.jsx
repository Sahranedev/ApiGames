import React from "react";
import "./gameListStyle.css";

function GameListAffichage({
  name,
  background_image: backgroundImage,
  metacritic,
}) {
  return (
    <div className="gamePageContainer">
      <h2>{name}</h2>
      <img className="backgroundGameImage" src={backgroundImage} alt="jeu" />
      <div className="fav-metacritic">
        <div>❤️</div>
        <div>Note : {metacritic}</div>
      </div>
    </div>
  );
}

export default GameListAffichage;
