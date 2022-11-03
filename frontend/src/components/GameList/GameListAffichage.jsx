import React from "react";
import "./gameListStyle.css";
import "../SingleGame/singleGame.css";
import { Link } from "react-router-dom";
import GameGenreAffichage from "./GameGenreAffichage";
import GameDateAffichage from "./GameDateAffichage";

function GameListAffichage({
  name,
  background_image: backgroundImage,
  metacritic,
  released,
  genres,
  id,

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
        <Link to={`/game/${id}`}>
          <img src={backgroundImage} alt="jeu" />
        </Link>
      </div>

      <div className="gameInfo">
        <div className="metaFav">
          {metacritic ? (
            <div className={colorCritic(metacritic)}>
              <a href={metacriticUrl} target="_blank" rel="noreferrer">
                {metacritic}
              </a>
            </div>
          ) : null}

          {/*  <div className={colorCritic(metacritic)}>
            <a href={metacriticUrl} target="_blank" rel="noreferrer">
              {metacritic}
            </a>
          </div>
 */}

          <Link to={`/game/${id}`}>
            <h2 className="gameName">{name} </h2>
          </Link>
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
