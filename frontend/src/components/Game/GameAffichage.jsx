import React from "react";
import "./gameStyle.css";

function GameAffichage({
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

export default GameAffichage;
