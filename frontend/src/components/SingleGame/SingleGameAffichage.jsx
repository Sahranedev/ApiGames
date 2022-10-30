import React from "react";
import GameDateDetails from "./GameDateDetails";
import GameParaphDetails from "./GameParaphDetails";
import GameGenreDetails from "./GameGenreDetails";
import GameDevelopersDetails from "./GameDevelopersDetails";
import GamePublishersDetails from "./GamePublishersDetails";

function SingleGameAffichage({
  name_original: nameOriginal,
  background_image: backgroundImage,
  background_image_additional: backgroundImageAdd,
  metacritic,
  released,
  description,
  genres,
  developers,
  publishers,
  /* description, works one time but problem for reloading */
  /*  developers: [{ name: developer }], works one time problem for reloading  */
  /*  publishers: [{ name: publisher }], works one time problem for reloading  */
}) {
  return (
    <div className="gamePageContainer">
      <img className="backgroundGameImage" src={backgroundImage} alt="jeu" />
      <img className="backgroundGameImage" src={backgroundImageAdd} alt="jeu" />
      <div className="gamePageInformations">
        <div className="gamePageTitle">
          <h2>{nameOriginal}</h2>
          <div>❤️</div>
          <div>{metacritic}</div>
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
