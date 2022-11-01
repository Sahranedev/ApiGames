import React from "react";
import "./gameListStyle.css";
import "../SingleGame/singleGame.css";
import GameGenreDetails from "../SingleGame/GameGenreDetails";

function GameListAffichage({
  name,
  background_image: backgroundImage,
  metacritic,
  released,
  genres,

  platforms: [
    {
      platform: { name: platformeName },
    },
  ],
  /* tags: [{ name: tagName }], */

  metacritic_url: metacriticUrl,
}) {
  const colorCritic = () => {
    if (metacritic >= 75) {
      return "metacriticGreen";
    }
    if (metacritic >= 40) {
      return "metacriticYellow";
    }
    return "metacriticRed";
  };

  return (
    <div className="gamePageContainer">
      <div className="backgroundGameImage">
        <img src={backgroundImage} alt="jeu" />
      </div>
      <div className="gameInfo">
        <h2 className="gameName">{name} </h2>
        <div className={colorCritic(metacritic)}>
          <a href={metacriticUrl} target="_blank" rel="noreferrer">
            {metacritic}
          </a>
        </div>{" "}
        <div className="release">
          <strong>Sortie : </strong>
          {released}
        </div>
        <div className="gamePageDetails">
          {genres ? <GameGenreDetails genres={genres} /> : null}
        </div>
        <div className="platform">{platformeName}</div>
        <div>❤️</div>
      </div>
    </div>
  );
}

export default GameListAffichage;
