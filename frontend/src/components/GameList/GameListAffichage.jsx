import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./gameListStyle.css";

function GameListAffichage({
  name,
  background_image: backgroundImage,
  metacritic,
  id,
}) {
  const [idObtain, setID] = useState();
  const getID = () => {
    console.log(id);
    setID(id);
  };

  return (
    <div className="gamePageContainer" onClick={getID}>
      <NavLink to="/game" idObtain={idObtain}>
        <h2>{name}</h2>

        <img className="backgroundGameImage" src={backgroundImage} alt="jeu" />
      </NavLink>
      <div className="fav-metacritic">
        <div>❤️</div>
        <div>Note : {metacritic}</div>
      </div>
    </div>
  );
}

export default GameListAffichage;
