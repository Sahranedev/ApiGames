import React from "react";
import GameDateDetails from "./GameDateDetails";
import GameParaphDetails from "./GameParaphDetails";
import GameGenreDetails from "./GameGenreDetails";
import GameDevelopersDetails from "./GameDevelopersDetails";
import GamePublishersDetails from "./GamePublishersDetails";

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
  return (
    <div className="gamePageContainer">
      <div className="containerGameImage">
        <img className="gameImage" src={gameImage} alt="jeu" />
        <img
          className="additionalGameImage"
          src={additionalGameImage}
          alt="jeu"
        />
      </div>
      <div className="gamePageInformations">
        <div className="gamePageTitle">
          <h2>{nameOriginal}</h2>
          <div>❤️</div>
          <div>
            <a href={metacriticUrl} target="_blank" rel="noreferrer">
              {metacritic}
            </a>
          </div>
        </div>
      </div>
      <div className="gamePageGenre" />
      {genres ? <GameGenreDetails genres={genres} /> : null}
      <div className="gamePageCreators" />
      <h3>
        Publisher :
        {publishers ? <GamePublishersDetails publishers={publishers} /> : null}
      </h3>
      <h3>
        Developer :
        {developers ? <GameDevelopersDetails developers={developers} /> : null}
      </h3>
      <h3>
        Released :{released ? <GameDateDetails released={released} /> : null}
      </h3>
      <div className="gamePageDescription">
        {description ? <GameParaphDetails description={description} /> : null}
      </div>
    </div>
  );
}

export default SingleGameAffichage;
