import React from "react";

function SingleGameAffichage({
  name_original: nameOriginal,
  background_image: backgroundImage,
  background_image_additional: backgroundImageAdd,
  metacritic,
  released,
  /* description, works one time but problem for reloading */
  /* genres: [{ slug : genre }], works one time problem for reloading or mapping multiple elements */
  /*  developers: [{ name: developer }], works one time problem for reloading  */
  /*  publishers: [{ name: publisher }], works one time problem for reloading  */
}) {
  /* 
 <-------- Making new date format ------> 
     (ok but not working with reloading)
  const date = released.split("-").reverse();
  const deleteDay = date.shift(0);
  console.log(date.join(" ")); */

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
      {/*  {genre} */}
      <div className="gamePageCreators" />
      {/* <h3>Éditeurs : {publisher}</h3>
          <h3>Développeurs : {developer}</h3> */}
      <h3>Date de sortie : {released} </h3>
      <div className="gamePageDescription">
        {/* 
        <------ Making a replace to delete tags ------>
        {description.replace(/(<([^>]+)>)/gi, "")} */}
      </div>
    </div>
  );
}

export default SingleGameAffichage;
