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
    <div className="gamePageContainer">
      <div className="containerGameImage">
        {/*  {gameImage ? (
          <img className="gameImage" src={gameImage} alt="Game" />
        ) : (
          <img className="gameImage" src={IMGnotFound} alt="IMG not found" />
        )} */}

        {gameImage ? (
          <div
            className="gameSelected"
            style={{ backgroundImage: `url('${gameImage}')` }}
          />
        ) : (
          <div
            className="gameSelected"
            style={{ backgroundImage: `url('${IMGnotFound}')` }}
          />
        )}
      </div>

      <div className="gamePageInformations">
        <div className="gamePageTitle">
          <div className={colorCritic(metacritic)}>
            <a href={metacriticUrl} target="_blank" rel="noreferrer">
              {metacritic}
            </a>
          </div>{" "}
          <h2>{nameOriginal}</h2>
          <div className="unlike" />
        </div>
        <div className="gamePageDetails">
          {genres ? <GameGenreDetails genres={genres} /> : null}
        </div>
      </div>

      <div className="otherImage">
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
        /> */}
      </div>
      <div className="gamePageCreators">
        <h3>
          Publisher :
          {publishers ? (
            <GamePublishersDetails publishers={publishers} />
          ) : null}
        </h3>
        <h3>
          Developer :
          {developers ? (
            <GameDevelopersDetails developers={developers} />
          ) : null}
        </h3>
        <h3>
          Released :{released ? <GameDateDetails released={released} /> : null}
        </h3>
      </div>
      <div className="gamePageDescription">
        {description ? <GameParaphDetails description={description} /> : null}
      </div>
    </div>
  );
}

export default SingleGameAffichage;
