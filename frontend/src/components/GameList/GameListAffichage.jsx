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
    <div className="container">
      <div className="row">
        <div className="col mb-2">
          <Link to={`/game/${id}`}>
            <img className="img-fluid h-100" src={backgroundImage} alt="jeu" />
          </Link>
        </div>

        <div className="col">
          <div className="d-flex align-items-center mb-2">
            {metacritic ? (
              <div className={colorCritic(metacritic)}>
                <a href={metacriticUrl} target="_blank" rel="noreferrer">
                  {metacritic}
                </a>
              </div>
            ) : null}

            <Link to={`/game/${id}`}>
              <h2 className="ms-4 gameName">{name} </h2>
            </Link>

            <div className="unFav" />
          </div>

          <div className="h5 mb-2">
            <strong>Released : </strong>

            {released ? <GameDateAffichage released={released} /> : null}
          </div>
          <div className=" ">
            <div className="">
              {genres ? <GameGenreAffichage genres={genres} /> : null}
            </div>
          </div>
          <div className="platform">{platformeName}</div>
        </div>
      </div>
    </div>
  );
}

export default GameListAffichage;
