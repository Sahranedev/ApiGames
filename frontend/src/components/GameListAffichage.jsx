/* eslint-disable*/
import React, { useState } from "react";
import "../Styles/gameListStyle.css";
import "../Styles/singleGame.css";
import GameGenreAffichage from "./GameGenreAffichage";
import GameDateAffichage from "./GameDateAffichage";
import Modale from "../Pages/Modale";
import "../Styles/GameListAffichage.css";

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
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <Modale show={show} setShow={setShow} id={id} />
      <div className="row">
        <div className="col mb-2 pointer">
          <img
            className="img-fluid h-100"
            src={backgroundImage}
            alt="jeu"
            onClick={() => setShow(id)}
          />
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

            <h2 className="ms-4 gameName pointer" onClick={() => setShow(id)}>
              {name}{" "}
            </h2>

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
