/* eslint-disable */
/* eslint eqeqeq: 0 */
import React, { useState } from "react";
import "../Styles/singleGameDisplay.css";
import GameDateDetails from "./GameDateDetails";
import GameParaphDetails from "./GameParaphDetails";
import GameGenreDetails from "./GameGenreDetails";
import GameDevelopersDetails from "./GameDevelopersDetails";
import GamePublishersDetails from "./GamePublishersDetails";
import IMGnotFound from "../images/IMGnotFound.png";

function SingleGameDisplay({
  name_original: nameOriginal,
  background_image: gameImage,
  background_image_additional: additionalGameImage,
  metacritic_url: metacriticUrl,
  metacritic,
  released,
  description,
  genres,
  developers,
  publishers,
  game,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const colorCritic = () => {
    if (metacritic >= 75) {
      return "metacritic75100";
    }
    if (metacritic >= 40) {
      return "metacritic4074";
    }
    return "metacritic039";
  };
  const addStorage = () => {
    let storedData = window.localStorage.games
      ? window.localStorage.games.split(",")
      : [];

    if (!storedData.includes(game.id.toString())) {
      storedData.push(game.id);
      window.localStorage.games = storedData;
    }
    setIsFavorite(!isFavorite);
  };
  const removeStorage = () => {
    let storedData = window.localStorage.games.split(",");
    let newData = storedData.filter((id) => id != game.id);
    window.localStorage.games = newData;
    setIsFavorite(!isFavorite);
  };
  /* In this page : ternary to check elements given by props */
  return (
    <div className="carouselContainer container-fluid g-0 singleGameContainer bg-dark h-100 w-100">
      {/*   Carrousel  */}
      <div className="container w-60">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="container-fluid g-0 singleGameContainer bg-dark h-100 w-100">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {gameImage ? (
                    <img src={gameImage} className="img-responsive" alt="..." />
                  ) : (
                    <img
                      src={IMGnotFound}
                      className="img-responsive"
                      alt="not found"
                    />
                  )}
                </div>
                <div className="carousel-item">
                  {additionalGameImage ? (
                    <img
                      src={additionalGameImage}
                      className="img-responsive"
                      alt="..."
                    />
                  ) : (
                    <img
                      src={IMGnotFound}
                      className="img-responsive"
                      alt=" not found"
                    />
                  )}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text informations */}
      <div className="totalPresentation @include media-breakpoint-up(md) { shadow-lg p-3 mb-5 rounded }">
        <div className=".md-container rounded">
          <div className="gamePageTitle">
            {metacritic ? (
              <div className={`text-white ${colorCritic(metacritic)}`}>
                <a href={metacriticUrl} target="_blank" rel="noreferrer">
                  {metacritic}
                </a>
              </div>
            ) : null}

            {nameOriginal ? (
              <h2 className="text-white text-center">{nameOriginal}</h2>
            ) : null}
            {isFavorite ? (
              <div onClick={removeStorage} className="like text-center" />
            ) : (
              <div onClick={addStorage} className="unlike text-center" />
            )}
          </div>
          <div className="details">
            <div className="gamePageDetails text-center">
              {genres ? <GameGenreDetails genres={genres} /> : null}
            </div>

            <div className="container">
              <div className="row">
                <h3 className="h5 col-4 text-center text-white">
                  Publisher :
                  {publishers ? (
                    publishers.length > 0 ? (
                      <GamePublishersDetails publishers={publishers} />
                    ) : (
                      " not specified "
                    )
                  ) : null}
                </h3>
                <h3 className="h5 col-4 text-center text-white">
                  Developer :
                  {developers ? (
                    developers.length > 0 ? (
                      <GameDevelopersDetails developers={developers} />
                    ) : (
                      " not specified "
                    )
                  ) : null}
                </h3>
                <h3 className="h5 col-4 text-center text-white">
                  Released :{" "}
                  {released ? <GameDateDetails released={released} /> : null}
                </h3>
              </div>
            </div>
          </div>
          <div className="gamePageDescription text-white">
            {description ? (
              <GameParaphDetails description={description} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleGameDisplay;
