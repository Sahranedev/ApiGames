import React from "react";
import ButtonClose from "./ButtonClose";

function Gamepresentation({
  name,
  publishers,
  developers,
  headerImage,
  shortDescription,
  release_date: { date },
  screenshots,
  genres,
}) {
  return (
    <div className="gamePageContainer">
      <ButtonClose />
      <img src={headerImage} alt="jeu" />
      <div className="gamePageInformations">
        <div className="gamePageTitle">
          <h2>{name} </h2>
          <div>❤️</div>
        </div>
        <div className="gamePageCarrousel">
          {screenshots.map((screenshot) => (
            <img src={screenshot.pathThumbnail} alt="futur carrousel" />
          ))}
        </div>
        <div>Score métacritique</div>
        <div className="gamePageGenre">
          {genres.map((genre) => (
            <div>{genre.description}</div>
          ))}
        </div>
        <div className="gamePageCreators">
          <h3>Editor : {publishers}</h3>
          <h3>Développeurs : {developers}</h3>
          <h3>Date de sortie : {date} </h3>
        </div>
      </div>
      <p className="gamePageDescription">{shortDescription}</p>
    </div>
  );
}

export default Gamepresentation;
