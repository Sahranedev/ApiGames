import React from "react";
import { Link } from "react-router-dom";
import "./gameListStyle.css";
import "../SingleGame/singleGame.css";
import GameGenreAffichage from "./GameGenreAffichage";
import GameDateAffichage from "./GameDateAffichage";

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
    <div className="gameAffichageContainer">
      <div className="backgroundGameImage">
        <img src={backgroundImage} alt="jeu" />
      </div>
      <div className="gameInfo">
        <div className="metaFav">
          <div className={colorCritic(metacritic)}>
            <a href={metacriticUrl} target="_blank" rel="noreferrer">
              {metacritic}
            </a>
          </div>{" "}
          <h2 className="gameName">{name} </h2>
          <div className="unFav" />
        </div>

        <div className="release">
          <strong>Released : </strong>
          {released ? <GameDateAffichage released={released} /> : null}
        </div>
        <div className="gameGenresAffichage">
          {genres ? <GameGenreAffichage genres={genres} /> : null}
        </div>
        <div className="platform">{platformeName}</div>
      </div>
    </div>
  );
}

export default GameListAffichage;
