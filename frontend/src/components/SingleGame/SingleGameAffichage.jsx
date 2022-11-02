import React from "react";
import GameDateDetails from "./GameDateDetails";
import GameParaphDetails from "./GameParaphDetails";
import GameGenreDetails from "./GameGenreDetails";
import GameDevelopersDetails from "./GameDevelopersDetails";
import GamePublishersDetails from "./GamePublishersDetails";
/* import IMGnotFound from "../images/IMGnotFound.png";
 */
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
    <div className="container-fluid g-0">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={gameImage} className="d-block w-100 h-60" alt="..." />
          </div>

          <div className="carousel-item">
            <img
              src={additionalGameImage}
              className="d-block w-100"
              alt="..."
            />
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

      {/*  
  ////////////// maybe change for be sure of content. esLint problem //////////////
  {gameImage ? (
          <img className="gameImage" src={gameImage} className="d-block w-100 h-60" alt="game" />
        ) : (
          <img className="gameImage" src={IMGnotFound} className="d-block w-100 h-60" alt="image not" />
        )} */}

      {/* {gameImage ? (
          <div
            className="gameSelected"
            style={{ backgroundImage: `url('${gameImage}')` }}
          />
        ) : (
          <div
            className="gameSelected"
            style={{ backgroundImage: `url('${IMGnotFound}')` }}
          />
        )} */}

      <div className="container">
        <div className="gamePageTitle">
          {metacritic ? (
            <div className={colorCritic(metacritic)}>
              <a href={metacriticUrl} target="_blank" rel="noreferrer">
                {metacritic}
              </a>
            </div>
          ) : null}

          <h2 className="text-white">{nameOriginal}</h2>
          <div className="unlike" />
        </div>
        <div className="gamePageDetails">
          {genres ? <GameGenreDetails genres={genres} /> : null}
        </div>
      </div>

      {/*  <div className="otherImage">
        {additionalGameImage ? (
          <div
            className="additionalGameImage"
            style={{ backgroundImage: `url('${additionalGameImage}')` }}
          />
        ) : (
          <div
            className="additionalGameImage"
            style={{ backgroundImage: `url('${IMGnotFound}')` }}
          />
        )}
        {/* <img
          className="additionalGameImage"
          src={additionalGameImage}
          alt="jeu"
        /> 
      </div> */}
      <div className="container">
        <div className="row">
          <h3 className="h5 col-4 text-center text-white">
            Publisher :
            {publishers ? (
              <GamePublishersDetails publishers={publishers} />
            ) : null}
          </h3>
          <h3 className="h5 col-4 text-center text-white">
            Developer :
            {developers ? (
              <GameDevelopersDetails developers={developers} />
            ) : null}
          </h3>
          <h3 className="h5 col-4 text-center text-white">
            Released :
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
