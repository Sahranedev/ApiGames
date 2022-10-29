import React from "react";

function SingleGameAffichage({
  name_original: nameOriginal,
  background_image: backgroundImage,
  metacritic,
  genres,
  /* developers, */
}) {
  return (
    <div className="gamePageContainer">
      <img className="backgroundGameImage" src={backgroundImage} alt="jeu" />

      <div className="gamePageInformations">
        <div className="gamePageTitle">
          <h2>{nameOriginal}</h2>
          <div>❤️</div>
          <div>{metacritic}</div>
        </div>
      </div>
      {/* 
        <div className="gamePageCarrousel">
          {screenshots.map((screenshot) => (
            <img src={screenshot.pathThumbnail} alt="futur carrousel" />
          ))}
          </div> */}
      <div className="gamePageGenre" />

      <div className="gamePageCreators" />

      {/*    Développeurs :{" "}
        {developers.map((developer) => (
          <div>{developer.name}</div>
        ))}
        ; */}
    </div>
    /* <div className="gamePageCreators">
          <h3>Éditeurs : {publishers}</h3>
          <h3>Développeurs : {developers}</h3>
          <h3>Date de sortie : {date} </h3>
        </div>
      </div>
      <p className="gamePageDescription">{shortDescription}</p>  
    </div> */
  );
}

export default SingleGameAffichage;
