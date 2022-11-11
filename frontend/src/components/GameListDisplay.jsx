/* eslint-disable*/
import React, { useState } from "react";
import "../Styles/gameListStyle.css";
import GameGenreDisplay from "./GameGenreDisplay";
import GameDateDisplay from "./GameDateDisplay";
import Modale from "../Pages/Modale";
import IMGnotFound from "../images/IMGnotFound.png";

function GameListDisplay({
  // On extrait les propriétés qu'on veut afficher depuis le tableau de l'API
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
  // Fonction du score métacritic relié a une classe CSS qui permet de changer la couleur en fonction du score
  const colorCritic = () => {
    if (metacritic >= 75) {
      return "metacriticGreen";
    }
    if (metacritic >= 40) {
      return "metacriticYellow";
    }
    return "metacriticRed";
  };
  // Déploiment du State dynamique pour gérer l'affichage du modal
  const [show, setShow] = useState(false);
  return (
    <div className="container mt-4">
      <Modale show={show} setShow={setShow} id={id} />
      <div className="row">
        <div className="col mb-2 pointer">
          {backgroundImage ? (
            <img
              className="img-fluid h-100"
              src={backgroundImage}
              alt="jeu"
              onClick={() => setShow(id)}
            />
          ) : (
            <img
              className="img-fluid h-100"
              src={IMGnotFound}
              alt="not found"
              onClick={() => setShow(id)}
            />
          )}
        </div>
        <div className="col">
          <div className="d-flex align-items-center mb-2">
            {/* Ternaire qui pose une condition sur l'affichage des scores metacritic */}
            {metacritic ? (
              <div className={colorCritic(metacritic)}>
                <a href={metacriticUrl} target="_blank" rel="noreferrer">
                  {metacritic}
                </a>
              </div>
            ) : null}
            {/* Déclenchement d'une fonction click pour afficher le modal */}
            <h2 className="ms-4 gameName pointer" onClick={() => setShow(id)}>
              {name}{" "}
            </h2>

            <div className="unFav" />
          </div>

          <div className="h5 mb-2">
            <strong>Released : </strong>
            {/* Ternaire qui pose une condition d'affichage en appelant le composant qui contient les dates de sorties */}
            {released ? <GameDateDisplay released={released} /> : null}
          </div>
          <div className=" ">
            <div className="">
              {/* Ternaire qui pose une condition d'affichage en appelant le composant qui contient les genres */}
              {genres ? <GameGenreDisplay genres={genres} /> : null}
            </div>
          </div>
          <div className="platform mx-3">{platformeName}</div>
        </div>
      </div>
    </div>
  );
}

export default GameListDisplay;
