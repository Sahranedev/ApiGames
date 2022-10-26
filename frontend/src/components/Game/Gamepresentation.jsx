import React from "react";
import ButtonClose from "./ButtonClose";

function Gamepresentation({
  name,
  publishers,
  developers,
  headerImage,
  shortDescription,
  release_date: { date },
  screenshots: [{ pathThumbnail }],
  genres: [{ description }],
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
          <img src={pathThumbnail} alt="futur carrousel" />
          <img src="mapping" alt="futur carrousel" />
          <img src="mapping" alt="futur carrousel" />
        </div>
        <div>Score métacritique</div>
        <div className="gamePageGenre">
          <div>{description}</div>
          <div>map</div>
          <div>map</div>
        </div>
        <div className="gamePageCreators">
          <h3>Editor : {publishers}</h3>
          <h3>Développeurs : {developers}</h3>
          <h3>Date de sortie :{date} </h3>
        </div>
      </div>
      <p className="gamePageDescription">{shortDescription}</p>
    </div>
  );
}

export default Gamepresentation;
