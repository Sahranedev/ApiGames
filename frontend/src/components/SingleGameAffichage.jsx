/* eslint-disable */
import React from "react";
import GameDateDetails from "./GameDateDetails";
import GameParaphDetails from "./GameParaphDetails";
import GameGenreDetails from "./GameGenreDetails";
import GameDevelopersDetails from "./GameDevelopersDetails";
import GamePublishersDetails from "./GamePublishersDetails";
import IMGnotFound from "../images/IMGnotFound.png";

function SingleGameAffichage({
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
}) {
  const colorCritic = () => {
    if (metacritic >= 75) {
      return "metacritic75100";
    }
    if (metacritic >= 40) {
      return "metacritic4074";
    }
    return "metacritic039";
  };

  return (
    <div className="container-fluid g-0 singleGameContainer bg-dark h-100 w-100">
      {/* Button to close the Modal - next feature*/}
      <button
        type="button"
        className="close bg-dark text-white border-0"
        aria-label="Close"
      >
        {/* Section of the carrousel - "IMGnotfound" when we doesn't have img from request */}
        <span aria-hidden="true">&times;</span>
      </button>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {gameImage ? (
              <img src={gameImage} className="d-block w-100 h-100" alt="..." />
            ) : (
              <img
                src={IMGnotFound}
                className="d-block w-100 h-100"
                alt="not found"
              />
            )}
          </div>
          <div className="carousel-item">
            {additionalGameImage ? (
              <img
                src={additionalGameImage}
                className="d-block w-100"
                alt="..."
              />
            ) : (
              <img
                src={IMGnotFound}
                className="d-block w-100"
                alt=" not found"
              />
            )}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container rounded">
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
          <div className="unlike text-center" />
        </div>
        <div className="gamePageDetails text-center">
          {genres ? <GameGenreDetails genres={genres} /> : null}
        </div>
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
      <div className="gamePageDescription text-white">
        {description ? <GameParaphDetails description={description} /> : null}
      </div>
    </div>
  );
}

export default SingleGameAffichage;
