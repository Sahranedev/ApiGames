import React from "react";
import "./Gamepresentation.css";
import ButtonClose from "./ButtonClose";

function Gamepresentation({ name, background_image, metacritic }) {
  return (
    <div className="gamePageContainer">
      <h2>{name}</h2>
      <img className="backgroundGameImage" src={background_image} alt="jeu" />
      <div>❤️</div>
      <div>{metacritic}</div>
      {/* <ButtonClose />
      <img src={headerImage} alt="jeu" />
      <div className="gamePageInformations">
        <div className="gamePageTitle">
        </div>
        <div className="gamePageCarrousel">
          {screenshots.map((screenshot) => (
            <img src={screenshot.pathThumbnail} alt="futur carrousel" />
          ))}
        </div>
        <div className="gamePageGenre">
          {genres.map((genre) => (
            <div>{genre.description}</div>
          ))}
        </div>
        <div className="gamePageCreators">
          <h3>Éditeurs : {publishers}</h3>
          <h3>Développeurs : {developers}</h3>
          <h3>Date de sortie : {date} </h3>
        </div>
      </div>
      <p className="gamePageDescription">{shortDescription}</p> */}
    </div>
  );
}

export default Gamepresentation;
