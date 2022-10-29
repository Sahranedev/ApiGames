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
      <div>❤️</div>
      <div>{metacritic}</div>
    </div>
  );
}

export default GameListAffichage;
